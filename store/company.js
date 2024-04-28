import { defineStore } from 'pinia';
// import { useAsyncData } from '@nuxtjs/composition-api';

export const useCompanyStore = defineStore('workStation', {
  state: () => ({
    loading: false,
    createCompany: null,
    isCompanyCreated: false,
    isCompanyDeleted: false,
    isCompanyEdited: false,
    companyList: null,
    singleCompany: null,

    // space api
    spaceList: null,
    isSpaceCreated: false,
    isSpaceDeleted: false,
    isSpaceEdited: false,
    spaceList: null,
    singleSpace: null,

    // projectapi
    projectList: null,
    isProjectCreated: false,
    isProjectDeleted: false,
    singleProject: null,

    // task api
    taskList: null,
    isTaskCreated: false,
    isTaskDeleted: false,
    singleProject: null,
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
        // {
        //   watch: [this.companyList]
        // }
      )

      this.companyList = data.value?.data;
      // console.log('userProfile', this.companyList) 
    },
    async getSingleCompany(company){
        const token = useCookie('token'); 
        console.log('token', token.value)
        const { data, pending, error } = await useAsyncData(
            'companyList',
            () => $fetch(`http://188.166.212.40/pera/public/api/v1/company/show/${company}`,{
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
            
            }),
            // {
            //   watch: [this.companyList]
            // }
        )
        this.singleCompany = data.value?.data;
        console.log('singlCompData', data)
        console.log('singlComp', this.singleCompany)
        // console.log('userProfile', this.companyList)
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
        console.log('company created', data)
       
        if(data.value.app_message === 'success'){
          this.isCompanyCreated = true;
          this.getCompanyList();
          // console.log('test')
        }

    },
    async editCompany ({id, name, email, address, contact_number, number_of_employees, company_type, logo}) {
      console.log('printCompid', id)
      // return
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
        console.log('data', data)
       
        if(data.value?.app_message === 'success'){
          this.isCompanyEdited = true;
          this.getCompanyList();
          // console.log('test')
        }

    },
    async deleteCompany (id) {
      console.log('printCompid', id)
      // return
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/company/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : id,
          // 'email' : email,
          // 'address' : address,
          // 'contact_number' : contact_number,
          // // 'size' : wPeople,
          // 'number_of_employees' : numEmployees,
          // 'company_type' : company_type,
          // 'services' : services
        },
      });
        console.log('data', data)
       
        if(data.value?.app_message === 'success'){
          this.isCompanyDeleted = true;
          this.getCompanyList();
          // console.log('test')
        }

    },
    async getSpaceList(){
      const token = useCookie('token'); 
      const { data, pending, error } = await useAsyncData(
        'spaceList',
        () => $fetch('http://188.166.212.40/pera/public/api/v1/space/list',{
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        
        }), 
        // {
        //   watch: [this.companyList]
        // }
      )

      this.spaceList = data.value?.data;
      // console.log('userProfile', this.companyList) 
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
          // {
          //   watch: [this.companyList]
          // }
        )
        this.singleSpace = data.value?.data;
        console.log('singlComp', this.singleSpace)
        // console.log('userProfile', this.companyList)
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
          // 'shared_status' : shared_status,
          // 'task_statuses' : task_statuses,
          // 'features' : features,
          // 'views' : views
          },
        });
       
        if(data.value.app_message === 'success'){
          console.log('space created')
          this.isSpaceCreated = true;
          this.getCompanyList();
          this.getSpaceList();
          this.getSingleCompany(company_id);
        }
    },
    async editSpace ({id, name, description, company_id, color}) {
      // console.log('printrefSpaceId', refSpaceId)
      // return
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
          // 'email' : email,
          // 'address' : address,
          // 'contact_number' : contact_number,
          // // 'size' : wPeople,
          // 'number_of_employees' : numEmployees,
          // 'company_type' : company_type,
          // 'services' : services
        },
      });
        console.log('data', data)
       
        if(data.value?.app_message === 'success'){
          this.isSpaceEdited = true;
          this.getCompanyList();
          this.getSpaceList();
          this.getSingleCompany(company_id);
        }

    },
    async deleteSpace (spaceId, companyId) {
      // console.log('printCompid', id)
      // return
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/space/delete/${spaceId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : spaceId,
          // 'email' : email,
          // 'address' : address,
          // 'contact_number' : contact_number,
          // // 'size' : wPeople,
          // 'number_of_employees' : numEmployees,
          // 'company_type' : company_type,
          // 'services' : services
        },
      });
        console.log('data', data)
       
        if(data.value?.app_message === 'success'){
          this.isSpaceDeleted = true;
          this.getCompanyList();
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
        // {
        //   watch: [this.companyList]
        // }
      )

      this.spaceList = data.value?.data;
      // console.log('userProfile', this.companyList) 
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
          // {
          //   watch: [this.companyList]
          // }
        )
        this.singleProject = data.value?.data;
        console.log('singlComp', this.singleProject)
        // console.log('userProfile', this.companyList)
    },
    async createProject ({name, description, space_id, task_statuses}) {
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
          'task_statuses' : task_statuses,
          // 'shared_status' : shared_status,
          // 'task_statuses' : task_statuses,
          // 'features' : features,
          // 'views' : views
          },
        });
       
        if(data.value.app_message === 'success'){
          console.log('project created')
          this.isProjectCreated = true;
          this.getSpaceList();
          this.getCompanyList();
          this.getSingleSpace(space_id);
        }
    },
    async deleteProject (projectID, spaceId) {
      console.log('projectIDstore', projectID)
      
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/projects/delete/${projectID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : projectID,
          // 'email' : email,
          // 'address' : address,
          // 'contact_number' : contact_number,
          // // 'size' : wPeople,
          // 'number_of_employees' : numEmployees,
          // 'company_type' : company_type,
          // 'services' : services
        },
      });
        console.log('data', data)
       
        if(data.value?.app_message === 'success'){
          this.isProjectDeleted = true;
          this.getCompanyList();
          this.getSpaceList();
          this.getSingleSpace(spaceId);
        }

    },
    async createTask ({name, description, project_id}) {
      console.log('projectIDstore', project_id)
      // return
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
          // 'shared_status' : shared_status,
          // 'task_statuses' : task_statuses,
          // 'features' : features,
          // 'views' : views
          },
        });
       
        if(data.value.app_message === 'success'){
          console.log('project created')
          this.isTaskCreated = true;
          this.getSpaceList();
          this.getCompanyList();
          this.getSingleProject(project_id);
        }
    },
    async deleteTask (taskID, projectId) {
      console.log('projectIDstore', projectId)
      
      const token = useCookie('token'); 
      const { data, pending } = await useFetch(`http://188.166.212.40/pera/public/api/v1/tasks/delete/${taskID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        body: {
          'id' : taskID,
          // 'email' : email,
          // 'address' : address,
          // 'contact_number' : contact_number,
          // // 'size' : wPeople,
          // 'number_of_employees' : numEmployees,
          // 'company_type' : company_type,
          // 'services' : services
        },
      });
        console.log('data', data)
       
        if(data.value?.app_message === 'success'){
          this.isTaskDeleted = true;
          this.getCompanyList();
          this.getSpaceList();
          this.getSingleProject(projectId);
        }

    },
  },
});
