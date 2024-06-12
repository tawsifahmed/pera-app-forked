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
        companyList: null,
        companyId: null,
        singleCompany: null,
        singleCompanyName: null,

        // space api
        spaceList: null,
        isSpaceCreated: false,
        isSpaceDeleted: false,
        isSpaceEdited: false,
        singleSpace: null,
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
        chartTaskInfo: null,
        chartClosedTaskInfo: null,
        rolesLists: null
    }),

    actions: {
        async getCompanyList() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('companyList', () =>
                $fetch('http://188.166.212.40/pera/public/api/v1/company/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            this.companyList = data.value?.data;
            this.singleCompanyName = data.value?.data[0]?.name;
        },
        async getSingleCompany(company) {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('singleCompany', () =>
                $fetch(`http://188.166.212.40/pera/public/api/v1/company/show/${company}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            this.singleCompany = data.value?.data;
        },
        async createCompany({ name, email, address, contact_number, number_of_employees, company_type, logo }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name,
                    email: email,
                    address: address,
                    contact_number: contact_number,
                    number_of_employees: number_of_employees,
                    company_type: company_type,
                    logo: logo
                }
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
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    email: email,
                    address: address,
                    contact_number: contact_number,
                    number_of_employees: number_of_employees,
                    company_type: company_type,
                    logo: logo
                }
            });
            if (data.value?.app_message === 'success') {
                this.isCompanyEdited = true;
                this.getCompanyList();
                await companies.getCompany();
            }
        },
        async deleteCompany(id) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/delete/${id}`, {
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
                localStorage.removeItem('userCompany');
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
                    $fetch(`http://188.166.212.40/pera/public/api/v1/space/list/${id}`, {
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
                $fetch(`http://188.166.212.40/pera/public/api/v1/space/show/${space}`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            this.singleSpace = data.value?.data;
        },
        async createSpace({ name, description, company_id, color }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/create`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    name: name,
                    description: description,
                    company_id: company_id,
                    color: color
                }
            });

            if (data.value?.app_message === 'success') {
                this.isSpaceCreated = true;
                await this.getCompanyList();
            }
        },
        async editSpace({ id, name, description, company_id, color }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    description: description,
                    company_id: company_id,
                    color: color
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
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/delete/${spaceId}`, {
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
                $fetch('http://188.166.212.40/pera/public/api/v1/space/list', {
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
          http://188.166.212.40/pera/public/api/v1/projects/show/${projectID}?assignees=${assignees}&priority=${priority}&status=${status}&search=${query}&start=${start}&end=${end}`,
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
            this.modStatusList = [{ name: 'All', code: '' }, ...this.statuslist];
        },

        async createProject({ name, description, space_id, statuses }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/projects/create`, {
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
        async editProject({ id, name, description, space_id, statuses }) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/projects/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    description: description,
                    space_id: space_id,
                    statuses: statuses
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
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/projects/delete/${projectID}`, {
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
        async createTask({ name, description, project_id, parent_task_id, dueDate, priority, assignees, tags }) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/create`, {
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
                }
            }
        },
        async editTask({ id, name, description, project_id, dueDate, priority, assignees, tags }) {
            const token = useCookie('token');
            const { data, error, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/update/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token.value}`
                },
                body: {
                    id: id,
                    name: name,
                    description: description,
                    due_date: dueDate,
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
                }
            }
        },
        async deleteTask(taskID, projectId) {
            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/delete/${taskID}`, {
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
            }
        },

        async getTaskAssignModalData() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('taskAssignModalData', () =>
                $fetch('http://188.166.212.40/pera/public/api/v1/users/list', {
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
                        name: element.name,
                        image: element.image
                    };
                    this.users.push(obj);
                });
            }
        },
        async getTagsAssignModalData() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('tagsAssignModalData', () =>
                $fetch('http://188.166.212.40/pera/public/api/v1/tag/list', {
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
        async getTaskDetails(id) {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('taskDetails', () =>
                $fetch(`http://188.166.212.40/pera/public/api/v1/tasks/show/${id}`, {
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

        async addTaskComment(id, comment, file) {
            const formData = new FormData();

            formData.append('comment', comment);
            formData.append('commentable_id', id);
            formData.append('file', file);

            const token = useCookie('token');
            const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/comments/create`, {
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
                $fetch(`http://188.166.212.40/pera/public/api/v1/chart-data`, {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            console.log('chartData', data.value);
            if (data?.value?.code === 200) {
                this.chartProjectInfo = data?.value?.data?.projects;
                console.log('chartProjectInfo', this.chartProjectInfo);
                this.chartTaskInfo = data?.value?.data?.total_task_count;
                this.chartClosedTaskInfo = data?.value?.data?.close_task_count;
            } else {
                this.chartProjectInfo = [];
                this.chartTaskInfo = [];
            }
        },
        async getRoles() {
            const token = useCookie('token');
            const { data, pending, error } = await useAsyncData('roleLit', () =>
                $fetch('http://188.166.212.40/pera/public/api/v1/roles/list', {
                    headers: {
                        Authorization: `Bearer ${token.value}`
                    }
                })
            );
            console.log('rolesData', data);
            if (data.value?.data?.length > 0) {
                this.rolesLists = data.value?.data;
            }
            else{
                this.rolesLists = [];
            }
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
        }
    }
});
