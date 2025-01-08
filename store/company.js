import { defineStore } from 'pinia';
import { useActiveCompanyStore } from '~/store/workCompany';
const companies = useActiveCompanyStore();

export const useCompanyStore = defineStore('workStation', {
    state: () => ({
        loading: false,
        createCompany: null,
        isCompanyCreated: false,
        isCompanyDeleted: false,
        isCompanyEdited: false,
        compList: null,
        companyId: null,
        singleCompany: null,
        singleCompanySpaces: null,
        singleCompanyName: null,
        isCompanySwitched: false,
        companySwitchToast: null,

        // space api
        spaceList: null,
        isSpaceCreated: false,
        isSpaceDeleted: false,
        isSpaceEdited: false,
        singleSpace: null,
        singleSpaceProjects: null,
        spaceSidebarlist: [],

        // projectapi
        projectList: null,
        isProjectCreated: false,
        isProjectEdited: false,
        isProjectDeleted: false,
        singleProject: null,

        // task api
        taskList: null,
        isTaskCreated: false,
        detectDuplicateTask: false,
        isTaskDeleted: false,
        isTaskEdited: false,
        tasks: [],
        kanbanTasks: [],
        calendarTasks: [],
        ganttChartData: [],
        recentTaskData: [],
        tasksAttachments: [],
        totalTaskCount: [],
        countTasksByStatus: [],
        taskStatusCounts: [],
        asngUsers: [],

        subTasks: [],

        taskDetails: [],
        taskActivity: [],

        taskStatus: [],

        users: [],
        tags: [],
        priorityList: [],

        singleTaskComments: null,
        isTaskCommentCreated: false,

        statuslist: [],
        modStatusList: [],
        chartProjectInfo: null,
        totalDashboardProjects: null,
        completedTasksChartData: null,
        inProgressTasksChartData: null,
        unAssignedTasksChartData: null,
        inProgressCnt: null,
        chartClosedTaskInfo: null,
        rolesLists: null
    }),

    actions: {
        async getCompanyList() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('compList', () =>
                $fetch('https://pbe.singularitybd.net/api/v1/company/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            this.compList = data.value?.data.map((item, index) => ({ ...item, index: index + 1 }));
            this.singleCompanyName = data.value?.data[0]?.name;
        },
        async getSingleCompany(company) {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('singleCompany', () =>
                $fetch(`https://pbe.singularitybd.net/api/v1/company/show/${company}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            this.singleCompany = data.value?.data;
            this.singleCompanySpaces = this.singleCompany?.spaces.map((item, index) => ({ ...item, index: index + 1 }));
        },
        async createCompany({ name, email, address, contact_number, number_of_employees, company_type, logo }) {
            const token = useCookie('token');
            const formdata = new FormData()

            formdata.append('name', name);
            formdata.append('email', email);
            formdata.append('address', address);
            formdata.append('contact_number', contact_number);
            formdata.append('number_of_employees', number_of_employees);
            formdata.append('company_type', company_type);
            if (logo != null) {
                formdata.append('image', logo);
            }
            
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/company/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: formdata
            });

            if (data.value?.app_message === 'success') {
                localStorage.setItem('userCompany', JSON.stringify(data.value?.data?.id));
                this.isCompanyCreated = true;
                this.companyId = data.value?.data?.id;
                const rolePermission = useCookie('rolePermission');
                rolePermission.value = data?.value?.permissions;
                await this.getCompanyList();
                await companies.getCompany();
            }
        },
        async editCompany({ id, name, email, address, contact_number, number_of_employees, company_type, logo }) {
            const token = useCookie('token');
            const formdata = new FormData()
            formdata.append('name', name);
            formdata.append('email', email);
            formdata.append('address', address);
            formdata.append('contact_number', contact_number);
            formdata.append('number_of_employees', number_of_employees);
            formdata.append('company_type', company_type);
            if (logo != null) {
                formdata.append('image', logo);
            }
            else{
                formdata.append('image', null);
            }

            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/company/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: formdata
            });
            if (data.value?.app_message === 'success') {
                this.isCompanyEdited = true;
                this.getCompanyList();
                await companies.getCompany();
            }
        },
        async switchCompany(switchCompId) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/switch-company`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    company_id: switchCompId
                }
            });
            if (data.value?.code === 200) {
                const userType = useCookie('userType');
                userType.value = data?.value?.user_type;
                const rolePermission = useCookie('rolePermission');
                rolePermission.value = data?.value?.permissions;
                this.isCompanySwitched = true;
                this.companySwitchToast = data.value.message;
                location.reload();
            } else {
                this.isCompanySwitched = false;
                this.companySwitchToast = 'Unable to switch company';
            }
        },
        async deleteCompany(id) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/company/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id
                }
            });
            if (data.value?.app_message === 'success') {
                this.isCompanyDeleted = true;
                await companies.getCompany();
                this.getCompanyList();
                // this.getSingleCompany(id);
            }
        },
        async getSpaceList() {
            let id = null;
            if (process.client) {
                id = JSON.parse(localStorage.getItem('userCompany'));
            }
            const token = useCookie('token');
            if (id) {
                const { data, pending, error } = await useAsyncData('spaceList', () =>
                    $fetch(`https://pbe.singularitybd.net/api/v1/space/list/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token.value}`
                        }
                    })
                );

                this.spaceList = data.value?.data;

                if (this.spaceList?.length > 0) {
                    this.spaceSidebarlist = [];
                    this.spaceList.forEach((element) => {
                        let obj = {
                            label: element?.name,
                            icon: 'pi pi-globe',
                            to: `/companies/${element?.company_id}/spaces/${element?.id}`
                        };
                        this.spaceSidebarlist.push(obj);
                    });
                }
            }
        },
        async getSingleSpace(space) {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('singleSpace', () =>
                $fetch(`https://pbe.singularitybd.net/api/v1/space/show/${space}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            this.singleSpace = data.value?.data;
            this.singleSpaceProjects = this.singleSpace?.projects.map((item, index) => ({ ...item, index: index + 1 }));
        },
        async createSpace({ name, description, company_id, color, users }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/space/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name,
                    description: description,
                    company_id: company_id,
                    color: color,
                    users
                }
            });

            if (data.value?.app_message === 'success') {
                this.isSpaceCreated = true;
                // await this.getCompanyList();
            }
        },
        async editSpace({ id, name, description, company_id, color, users }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/space/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    description: description,
                    company_id: company_id,
                    color: color,
                    users
                }
            });

            if (data.value?.app_message === 'success') {
                this.isSpaceEdited = true;
                // this.getSpaceList();
                await companies.getCompany();
                this.getSingleCompany(company_id);
            }
        },
        async deleteSpace(spaceId, companyId) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/space/delete/${spaceId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: spaceId
                }
            });

            if (data.value?.app_message === 'success') {
                this.isSpaceDeleted = true;
                // this.getSpaceList();
                await companies.getCompany();
                this.getSingleCompany(companyId);
            }
        },
        async getProjectList() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('projectList', () =>
                $fetch('https://pbe.singularitybd.net/api/v1/space/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );

            this.spaceList = data.value?.data;
        },

        async getSingleProject(projectID, assignees = '', priority = '', status = '', query = '', start = '', end = '') {
            const token = useCookie('token');
            if (assignees) {
                assignees = assignees.join(',');
            }

            const { data, pending, error } = await useAsyncData('singleProject', () =>
                $fetch(
                    `
          https://pbe.singularitybd.net/api/v1/projects/show/${projectID}?assignees=${assignees}&priority=${priority}&status=${status}&search=${query}&start=${start}&end=${end}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token.value}`
                        }
                    }
                )
            );

            this.singleProject = data.value?.data;
            this.tasks = data.value?.tasks;
            this.statuslist = data.value?.taskStatus;

            const kanbanData = this.statuslist.map((val) => {
                const content = this.tasks.filter((item) => item.data.status.name === val.name);
                return { name: val.name, statusColor: val.color_code, status: val, content: content };
            });

            this.kanbanTasks = kanbanData;
            const calendarData = this.tasks.map((val) => {
                const formatDate = (isoDate) => {
                    const date = new Date(isoDate);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
                    const day = String(date.getDate()).padStart(2, '0');
                    const hours = String(date.getHours()).padStart(2, '0');
                    const minutes = String(date.getMinutes()).padStart(2, '0');

                    return `${year}-${month}-${day} ${hours}:${minutes}`;
                };

                return { key: val.key, title: val.data.name, start: formatDate(val.data.created_at), end: val.data.dueDate ? formatDate(val.data.dueDate) : formatDate(val.data.created_at), color: val.data?.status?.color_code };
            });
            this.calendarTasks = calendarData;

            this.modStatusList = [{ name: 'All', code: '' }, ...this.statuslist];
            function formatTaskData(tasks) {
                let formattedData = [];

                function formatTask(task) {
                    const { name, created_at, dueDate, status } = task.data;

                    // Only format if both created_at and dueDate are available
                    if (created_at && dueDate) {
                        formattedData.push({
                            x: name, // Task name
                            y: [
                                new Date(created_at).getTime(), // created_at timestamp
                                new Date(dueDate).getTime() // dueDate timestamp
                            ],
                            fillColor: status.color_code // Status color code
                        });
                    }

                    // If there are children, recurse through them
                    if (task.children && task.children.length > 0) {
                        task.children.forEach((childTask) => formatTask(childTask));
                    }
                }

                // Iterate over the top-level tasks and format them
                tasks.forEach((task) => formatTask(task));

                return [
                    {
                        data: formattedData
                    }
                ];
            }
            function formatRecentTaskData(tasks) {
                let recentTaskData = [];
                const currentTime = new Date().getTime();
                const threeDaysAgo = currentTime - 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

                function formatTask(task) {
                    const { name, created_at, dueDate, status } = task.data;
                    const { key } = task;
                    const createdAtTime = new Date(created_at).getTime();

                    // Check if task was created within the last 3 days
                    if (createdAtTime >= threeDaysAgo && createdAtTime <= currentTime) {
                        recentTaskData.push({
                            key: key,
                            taskName: name, // Task name
                            dueDate: dueDate, // Due date
                            statusName: status.name, // Status name
                            statusColor: status.color_code // Status color code
                        });
                    }

                    // If there are children, recurse through them
                    if (task.children && task.children.length > 0) {
                        task.children.forEach((childTask) => formatTask(childTask));
                    }
                }

                // Iterate over the top-level tasks and format them
                tasks.forEach((task) => formatTask(task));

                return recentTaskData;
            }

            function extractAttchTaskData(tasks) {
                let totalTaskCount = 0;
                function processTask(task) {
                    // Increment total task count
                    totalTaskCount++;

                    // Recurse through sub-tasks
                    if (task.children && task.children.length > 0) {
                        task.children.forEach((childTask) => processTask(childTask));
                    }
                }

                // Iterate over the top-level tasks and format them
                tasks.forEach((task) => processTask(task));

                return {
                    totalTaskCount: totalTaskCount
                };
            }

            const taskCountsByStat = this.statuslist.map((status) => ({
                statusName: status.name,
                statusColor: status.color_code,
                taskCount: 0
            }));

            // Recursive function to traverse tasks and their children
            function countTasksByStatus(task) {
                const taskStatus = task.data.status;

                // Find the matching status in taskCountsByStatus and increment the taskCount
                const statusIndex = taskCountsByStat.findIndex((status) => status.statusName === taskStatus.name);
                if (statusIndex !== -1) {
                    taskCountsByStat[statusIndex].taskCount += 1;
                }

                // If the task has children, count them as well
                if (task.children && task.children.length > 0) {
                    task.children.forEach((childTask) => countTasksByStatus(childTask));
                }
            }

            // Traverse through the parent tasks and their children
            this.tasks.forEach((task) => countTasksByStatus(task));

            this.countTasksByStatus = taskCountsByStat;

            let result = extractAttchTaskData(this.tasks);
            this.recentTaskData = formatRecentTaskData(this.tasks);
            this.totalTaskCount = result.totalTaskCount;
            this.ganttChartData = formatTaskData(this.tasks);
        },

        async createProject({ name, description, space_id, statuses }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/projects/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name,
                    description: description,
                    space_id: space_id,
                    statuses: statuses
                }
            });

            if (data.value?.app_message === 'success') {
                this.isProjectCreated = true;
                await companies.getCompany();
                this.getSingleSpace(space_id);
                this.getChartData();
            }
        },
        async editProject({ id, name, description, space_id, statuses, git_project_id }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/projects/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    description: description,
                    space_id: space_id,
                    statuses: statuses,
                    git_project_id: git_project_id
                }
            });

            if (data.value?.app_message === 'success') {
                this.isProjectEdited = true;
                await companies.getCompany();
                this.getSingleSpace(space_id);
            }
        },
        async deleteProject(projectID, spaceId) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/projects/delete/${projectID}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: projectID
                }
            });

            if (data.value?.app_message === 'success') {
                this.isProjectDeleted = true;
                await companies.getCompany();
                this.getSingleSpace(spaceId);
            }
        },
        async getTaskDetails(id) {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('taskDetails', () =>
                $fetch(`https://pbe.singularitybd.net/api/v1/tasks/show/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );

            this.taskDetails = data.value?.data;
            this.taskActivity = data.value?.taskActivity;
            this.singleTaskComments = data.value?.data.comments;
            this.subTasks = data.value?.subTasks;
            this.taskStatus = [];
            let status = data.value?.taskStatus;

            if (status && status.length > 0) {
                status.forEach((element) => {
                    let obj = {
                        name: element.name,
                        code: element.id
                    };
                    this.taskStatus.push(obj);
                });
            }
        },
        async createTask({ name, description, project_id, parent_task_id, dueDate, priority, assignees, tags }) {
            // return
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/tasks/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name,
                    project_id: project_id,
                    parent_task_id: parent_task_id,
                    due_date: dueDate,
                    priority: priority,
                    assignees: assignees,
                    tags: tags,
                    description: description
                }
            });

            if (error.value) {
                if (error.value.data.code === 400) {
                    this.detectDuplicateTask = true;
                    this.isTaskCreated = false;
                }
            }
            if (data.value) {
                if (data.value.code === 201) {
                    this.isTaskCreated = true;
                    this.detectDuplicateTask = false;
                    this.getSingleProject(project_id);
                    let taskIdInLclStrg = Number(localStorage.getItem('taskDetailID'));
                    if (taskIdInLclStrg) {
                        this.getTaskDetails(taskIdInLclStrg);
                    }
                }
            }
        },
        async editTask({ id, name, description, project_id, dueDate, priority, assignees, tags }) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/tasks/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    description: description,
                    due_date: dueDate,
                    // due_date: dueDate,
                    priority: priority,
                    assignees: assignees,
                    tags: tags,
                    project_id: project_id
                    // 'attachments' : attachments,
                }
            });

            if (error.value) {
                if (error.value.data.code === 400) {
                    this.detectDuplicateTask = true;
                    this.isTaskEdited = false;
                }
            }
            if (data.value) {
                if (data.value.code === 200) {
                    this.isTaskEdited = true;
                    this.detectDuplicateTask = false;
                    this.getSingleProject(project_id);
                    let taskIdInLclStrg = Number(localStorage.getItem('taskDetailID'));
                    if (taskIdInLclStrg) {
                        this.getTaskDetails(taskIdInLclStrg);
                    }
                }
            }
        },
        async deleteTask(taskID, projectId) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/tasks/delete/${taskID}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: taskID
                }
            });
            if (data.value?.app_message === 'success') {
                this.isTaskDeleted = true;
                // this.getSpaceList();
                this.getSingleProject(projectId);
                let taskIdInLclStrg = Number(localStorage.getItem('taskDetailID'));
                if (taskIdInLclStrg) {
                    this.getTaskDetails(taskIdInLclStrg);
                }
            }
        },
        async getTaskAssignModalData() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
                $fetch('https://pbe.singularitybd.net/api/v1/users/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );

            if (data.value?.data?.length > 0) {
                this.users = [];
                data.value?.data.forEach((element) => {
                    let obj = {
                        id: element.id,
                        name: element.name
                    };
                    this.users.push(obj);
                });
            }
        },
        async getTagsAssignModalData() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('tagsAssignModalData', () =>
                $fetch('https://pbe.singularitybd.net/api/v1/tag/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );

            if (data.value?.data?.length > 0) {
                this.tags = [];
                data.value?.data.forEach((element) => {
                    let obj = {
                        id: element.id,
                        name: element.name
                    };
                    this.tags.push(obj);
                });
            }
        },

        async addTaskComment(id, comment, file, users=[]) {
            const formData = new FormData();

            formData.append('comment', comment);
            formData.append('commentable_id', id);
            formData.append('file', file);

            if (users?.length > 0) {
                users.forEach((user, index) => formData.append(`user_id[${index}]`, user))
            }

            const token = useCookie('token');
            const { data, pending } = await useFetch(`https://pbe.singularitybd.net/api/v1/comments/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: formData
            });

            if (data.value?.app_message === 'success') {
                this.isTaskCommentCreated = true;
                this.getTaskDetails(id);
                // this.getCompanyList();
                // this.getSpaceList();
            }
        },
        async getChartData() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('chartData', () =>
                $fetch(`https://pbe.singularitybd.net/api/v1/dashboard/task-status`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            if (data?.value?.code === 200) {

                this.chartProjectInfo = data?.value?.data?.projectCounts.map(project => {
                    let projectName = project.project_name;
                    if (projectName.length > 7) {
                        projectName = projectName.substring(0, 7) + '...';
                    }
                    return projectName;
                });
                this.inProgressCnt = data?.value?.data?.projectCounts.map(project => project.inProgressCounts);
                this.chartClosedTaskInfo = data?.value?.data?.projectCounts.map(project => project.completedCounts);
                this.totalDashboardProjects = data?.value?.data?.projectCounts.length;
                this.completedTasksChartData = data?.value?.data?.completed;
                localStorage.setItem('completedTasksChartData', JSON.stringify(data?.value?.data?.completed));
                this.inProgressTasksChartData = data?.value?.data?.inProgress;
                localStorage.setItem('inProgressTasksChartData', JSON.stringify(data?.value?.data?.inProgress));
                this.unAssignedTasksChartData = data?.value?.data?.unAssigneeCount;
                localStorage.setItem('unAssignedTasksChartData', JSON.stringify(data?.value?.data?.unAssigneeCount));
            } else {
                this.chartProjectInfo = [];
                this.inProgressCnt = [];
            }
        },
        async getRoles() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('roleLit', () =>
                $fetch('https://pbe.singularitybd.net/api/v1/roles/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            if (data.value?.data?.length > 0) {
                this.rolesLists = data.value?.data;
            } else {
                this.rolesLists = [];
            }
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
        }
    }
});
