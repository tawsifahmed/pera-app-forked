import { defineStore } from 'pinia';
export const useCompanyStore = defineStore('workStation', {
  state: () => ({
    loading: false,
    createCompany: null,
    isCompanyCreated: false,
    isCompanyDeleted: false,
    isCompanyEdited: false,
    companyList: null,
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
    isProjectDeleted: false,
    singleProject: null,

    // task api
    taskList: null,
    isTaskCreated: false,
    isTaskDeleted: false,
    isTaskEdited: false,
    tasks: [],
    asngUsers: [],

    subTasks:[],

    users: [],
    priorityList: [],

    singleTaskComments: null,
    isTaskCommentCreated: false,
    
  }),
  
  actions: {
    async getCompanyList(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'companyList',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/company/list',{
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        
        }), 
      )
      this.companyList = data.value?.data;
      this.singleCompanyName = data.value?.data[0]?.name;
    },
    async getSingleCompany(company){
        const token = useCookie('token');
        const { data, pending, error } = await useAsyncData(
            'getSingleCompany',
            () => $fetch(`http://188.166.212.40/pera/public/api/v1/company/show/${company}`,{
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            
            }),
        )
        this.singleCompany = data.value?.data;
    },
    async createCompany ({name, email, address, contact_number, number_of_employees, company_type, logo}) {
      const token = useCookie('token');
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name' : name,
          'email' : email,
          'address' : address,
          'contact_number' : contact_number,
          'number_of_employees' : number_of_employees,
          'company_type' : company_type,
          'logo': logo,
        },
      });
       
        if(data.value.app_message === 'success'){
          localStorage.setItem('userCompany', JSON.stringify(data.value?.data?.id))
          this.isCompanyCreated = true;
          await this.getCompanyList();
        } 
    },
    async editCompany ({id, name, email, address, contact_number, number_of_employees, company_type, logo}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/update/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : id,
          'name' : name,
          'email' : email,
          'address' : address,
          'contact_number' : contact_number,
          'number_of_employees' : number_of_employees,
          'company_type' : company_type,
          'logo': logo,
        },
      });
        if(data.value?.app_message === 'success'){
          this.isCompanyEdited = true;
          this.getCompanyList();
        }

    },
    async deleteCompany (id) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : id,
        },
      });
        if(data.value?.app_message === 'success'){
          this.isCompanyDeleted = true;
          this.getCompanyList();
        }

    },
    async getSpaceList(){
      let id = null
      if(process.client){
        id = JSON.parse(localStorage.getItem('userCompany'))
      }
      const token = useCookie('token'); 
      if(id){
        const { data, pending, error } = await useAsyncData(
          'spaceList',
          () => $fetch(`http://188.166.212.40/pera/public/api/v1/space/list/${id}`,{
            headers: {
              Authorization: `Bearer ${token.value}`,
            },
          
          }), 
        )

        this.spaceList = data.value?.data;
        
        if(this.spaceList?.length > 0){
          this.spaceSidebarlist = [];
            this.spaceList.forEach(element => {
                let obj = {
                    'label': element?.name,
                    'icon': 'pi pi-globe',
                    'to': `/companies/${element?.company_id}/spaces/${element?.id}`,
                }
                this.spaceSidebarlist.push(obj)
            });
        }
      }
    },
    async getSingleSpace(space){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
          'companyList',
          () => $fetch(`http://188.166.212.40/pera/public/api/v1/space/show/${space}`,{
          headers: {
              Authorization: `Bearer ${token.value}`,
          },
          
          }),
          
        )
        this.singleSpace = data.value?.data;
    },
    async createSpace ({name, description, company_id, color}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name' : name,
          'description' : description,
          'company_id' : company_id,
          'color' : color,
          },
        });
       
        if(data.value.app_message === 'success'){
          this.isSpaceCreated = true;
          await this.getCompanyList()
        }
    },
    async editSpace ({id, name, description, company_id, color}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/update/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : id,
          'name' : name,
          'description' : description,
          'company_id' : company_id,
          'color' : color,
        },
      });
       
        if(data.value?.app_message === 'success'){
          this.isSpaceEdited = true;
          this.getSpaceList();
          this.getSingleCompany(company_id);
        }

    },
    async deleteSpace (spaceId, companyId) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/delete/${spaceId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : spaceId,
        },
      });
       
        if(data.value?.app_message === 'success'){
          this.isSpaceDeleted = true;
          this.getSpaceList();
          this.getSingleCompany(companyId);
        }

    },
    async getProjectList(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'spaceList',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/space/list',{
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        
        }), 
      )

      this.spaceList = data.value?.data;
    },
    async getSingleProject(projectID){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
          'companyList',
          () => $fetch(`http://188.166.212.40/pera/public/api/v1/projects/show/${projectID}`,{
          headers: {
              Authorization: `Bearer ${token.value}`,
          },
          }),
        )

        this.singleProject = data.value?.data;

        this.tasks = data.value?.tasks;
    },

    async createProject ({name, description, space_id, statuses}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/projects/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name' : name,
          'description' : description,
          'space_id' : space_id,
          'statuses' : statuses,
          },
        });
       
        if(data.value.app_message === 'success'){
          this.isProjectCreated = true;
          this.getSingleSpace(space_id);
        }
    },
    async deleteProject (projectID, spaceId) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/projects/delete/${projectID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : projectID,
        },
      });
       
        if(data.value?.app_message === 'success'){
          this.isProjectDeleted = true;
          this.getSingleSpace(spaceId);
        }

    },
    async createTask ({name, description, project_id, parent_task_id}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'name' : name,
          'description' : description,
          'project_id' : project_id,
          'parent_task_id' : parent_task_id,
          },
        });
       
        if(data.value.app_message === 'success'){
          this.isTaskCreated = true;
          this.getSingleProject(project_id);
        }
    },
    async deleteTask (taskID, projectId) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/delete/${taskID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : taskID,
        },
      });
        if(data.value?.app_message === 'success'){
          this.isTaskDeleted = true;
          // this.getSpaceList();
          this.getSingleProject(projectId);
        }

    },
    async editTask ({id, name, description, project_id, dueDate, priority, assignees}) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/update/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : id,
          'name' : name,
          'description' : description,
          'due_date' : dueDate,
          'priority' : priority,
          'assignees' : assignees,
          'projectId' : project_id,
          // 'attachments' : attachments,
        },
      });
       
        if(data.value?.app_message === 'success'){
          console.log('dataAttach', data)
          this.isTaskEdited = true;
          this.getSingleProject(project_id);
        }

    },

    async getTaskAssignModalData(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'companyList',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/users/list',{
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        
        }), 
      )

      if(data.value?.data?.length > 0){
        this.users = [];
        data.value?.data.forEach(element => {
              let obj = {
                'id': element.id,
                'name': element.name,
              }
              this.users.push(obj)
          });
      }
    },
    async getTaskDetails(id){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
          'getSingleTaskComments',
          () => $fetch(`http://188.166.212.40/pera/public/api/v1/tasks/show/${id}`,{
          headers: {
              Authorization: `Bearer ${token.value}`,
            },
          }),
      )
      this.singleTaskComments = data.value?.data.comments;
      this.subTasks = data.value?.subTasks;
  },

    async addTaskComment (id, comment) {
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/comments/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'comment' : comment,
          'commentable_id' : id,
        },
      });
       
        if(data.value?.app_message === 'success'){
          this.isTaskCommentCreated = true;
          this.getTaskDetails(id);
          // this.getCompanyList();
          // this.getSpaceList();
        }

    },

    formatDate(dateString){
      const date = new Date(dateString);
      return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
  },
  },
});
