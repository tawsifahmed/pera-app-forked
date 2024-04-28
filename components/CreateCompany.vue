
<script setup>

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { createCompany, getCompanyList } = useCompanyStore(); // use authenticateUser action from  auth store
const { iscompanyCreated } = storeToRefs(useCompanyStore()); 
    // import { storeToRefs } from 'pinia'
    // import {useWorkStation} from '@/store/workSpace'
    // const workStation = useWorkStation()
    // const { setWorkStation } = workStation
    // const { workStations } = storeToRefs(workStation)

    const showStepCompany = ref(true)
    const showStepPeople = ref(false)
    const showStepRole = ref(false)
    const showStepSolution = ref(false)
    const showStepInvite = ref(false)
    const showStepName = ref(false)
    const showFinalMsg = ref(false)

    const progress = ref(0)

    // How large is your company?
    const  numEmployees = ref(null)
    const companyLargeAmount = reactive([
        {
            id: 1,
            label: "1-10"
        },
        {
            id: 2,
            label: "11-25"
        },
        {
            id: 3,
            label: "26-250"
        },
        {
            id: 4,
            label: "251-500"
        },
        {
            id: 5,
            label: "501-2000"
        },
        {
            id: 6,
            label: "2000+"
        },
        {
            id: 7,
            label: "I don't know"
        }
    ])

    const selectAmountId = ref(null)

    const selectAmount = (a) => {
        if(selectAmountId.value === a.id){
            selectAmountId.value = null
            numEmployees.value = null
        }else {
            selectAmountId.value = a?.id
            numEmployees.value = a?.label
        }
    }

    watch(selectAmountId, (newV, oldV) => {
        let progressForAmount
        if(newV !== null && oldV === null){
            progressForAmount = 25     
        }else if(newV === null && oldV !== null){
            progressForAmount = -25
        }
        else{
            progressForAmount = 0
        }

        progress.value = progress.value  + progressForAmount
    })

    //How many people will you be working with?
    const wPeople = ref(null)
    const workingPeople = reactive([
        {
            id: 1,
            label: "Just me"
        },
        {
            id: 2,
            label: "2-10"
        },
        {
            id: 3,
            label: "11-25"
        },
        {
            id: 4,
            label: "26-50"
        },
        {
            id: 5,
            label: "51-250"
        },
        {
            id: 6,
            label: "251-500"
        },
        {
            id: 7,
            label: "500+"
        },
        // {
        //     id: 8,
        //     label: "I don't know"
        // }
    ])

    const selectPeopleId = ref(null)

    const selectPeople = (p) => {
        if(selectPeopleId.value === p?.id){
            selectPeopleId.value = null
            wPeople.value = null
        }else {
            selectPeopleId.value = p?.id
            wPeople.value = p?.label
        }
    }

    watch(selectPeopleId, (newV, oldV) => {
        let progressForPeople
        if(newV !== null && oldV === null){
            progressForPeople = 15     
        }else if(newV === null && oldV !== null){
            progressForPeople = -15
        }
        else{
            progressForPeople = 0
        }

        progress.value = progress.value  + progressForPeople
    })

    //What is your role?
    const rRole = ref(null)
    const roles = reactive([
        {
            id: 1,
            label: "Owner"
        },
        {
            id: 2,
            label: "C-Suite"
        },
        {
            id: 3,
            label: "Vice President"
        },
        {
            id: 4,
            label: "Director"
        },
        {
            id: 5,
            label: "Team Leader"
        },
        {
            id: 6,
            label: "Tem Member"
        },
        {
            id: 7,
            label: "Freelancer"
        },
        {
            id: 8,
            label: "Other"
        }
    ])

    const selectRoleId = ref(null)

    const selectRole = (r) => {
        if(selectRoleId.value === r?.id){
            selectRoleId.value = null
            rRole.value = null
        }else {
            selectRoleId.value = r?.id
            rRole.value = r?.label
        }
    }

    watch(selectRoleId, (newV, oldV) => {
        let progressForRole
        if(newV !== null && oldV === null){
            progressForRole = 15     
        }else if(newV === null && oldV !== null){
            progressForRole = -15
        }
        else{
            progressForRole = 0
        }

        progress.value = progress.value  + progressForRole
    })

    // Which solution would you like to start with?
    const sSolution = ref(null)
    const solutions = reactive([
        {
            id: 1,
            label: "PMO"
        },
        {
            id: 2,
            label: "Finance & Accounting"
        },
        {
            id: 3,
            label: "HR & Recruiting"
        },
        {
            id: 4,
            label: "Operations"
        },
        {
            id: 5,
            label: "Support"
        },
        {
            id: 6,
            label: "Seles & CRM"
        },
        {
            id: 7,
            label: "Personal Use"
        },
        {
            id: 8,
            label: "IT"
        },
        {
            id: 9,
            label: "Creative & Design"
        },
        {
            id: 10,
            label: "Personal Services"
        },
        {
            id: 11,
            label: "Marketing"
        },
        {
            id: 12,
            label: "Engineering & Production"
        },
        {
            id: 13,
            label: "Other"
        },
    ])

    const solutionId = ref(null)

    const selectSolution = (s) => {
        if(solutionId.value === s?.id){
            solutionId.value = null
            sSolution.value = null
            console.log('solutionId', sSolution.value) 
        }else {
            solutionId.value = s?.id
            sSolution.value = s?.label
            console.log('solutionId', sSolution.value)
        }
    }

    watch(solutionId, (newV, oldV) => {
        let progressForsolution
        if(newV !== null && oldV === null){
            progressForsolution = 25     
        }else if(newV === null && oldV !== null){
            progressForsolution = -25
        }
        else{
            progressForsolution = 0
        }

        progress.value = progress.value + progressForsolution
    })

    // Invite people to your Workspace
    const invite = ref(null)

    const validateEmail = (mail) => {
        return String(mail)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        }
        
    const showValidEmail = ref(null)
    const validEmailStatus = ref(null)    
    const pForEmail = ref(null)
    const handleEmail = () => {
        validEmailStatus.value = false
        let progressForInvite
        let typedEmail = invite.value
        if(validateEmail(invite.value) !== null){
            showValidEmail.value = invite.value
            validEmailStatus.value = true
        }
        else{
            showValidEmail.value = null
            validEmailStatus.value = false
        }
    }


    watch(validEmailStatus, (newV, oldV) => {
        let progressForInvite
        if(newV === true && oldV === false){
            progressForInvite = 25
            pForEmail.value = true
        }else if(newV === false && oldV === true){
            progressForInvite = -25
            pForEmail.value = false     
        }
        else{
            progressForInvite = 0
        }
        progress.value = progress.value  + progressForInvite
        console.log('progress.value', progress.value)
    })
    
    // Lastly, what would you like to name your Workspace?
    const workSpaceName =  ref(null)
    const workSpaceNameStatus = ref(null)
    const pWName = ref(null)

    watch(workSpaceName, (newVal, oldVal) => {
        let progressForName
        if(oldVal === '' && newVal !== ''){
            progressForName = 25
            pWName.value = true
        }else if(oldVal !== '' && newVal === ''){
            progressForName = -25
            pWName.value = true
        }
        else if(oldVal === null && newVal !== null){
            progressForName = 25
            pWName.value = true
        }else {
            progressForName = 0
        }
        progress.value = progress.value  + progressForName
    })

    // console.log('wPeople', wPeople.value)
    // const createCompData = ref({
    // name: workSpaceName.value,
    // wPeople: wPeople.value,
    // numEmployees: numEmployees.value,
    // services: null
    // })

    const handleCreateWorkspace = async () => {
        // const formData = new FormData()
        // formData.append('name', workSpaceName.value)
        // formData.append('size', wPeople.value)
        // formData.append('number_of_employees', numEmployees.value)
        // formData.append('company_role', rRole.value)

        const  workspaceData = {
            'name': workSpaceName.value,
            'email': invite.value,
            'address': null,
            'contact_number': null,
            // 'wPeople': wPeople.value,
            'number_of_employees': numEmployees.value,
            'company_type': sSolution.value,
            // 'services': null
            // 'sSolution': sSolution.value,
            // 'invite': invite.value,
        }
        // console.log('workspaceData', workspaceData)
        // setWorkStation(formData.value)
        // console.log('createCompData.value', createCompData.value)
        // return

        // await createCompany(createCompData.value);
        await createCompany(workspaceData);
        // await getCompanyList();

        if(iscompanyCreated.value === true){
            showStepName.value = false
            showFinalMsg.value = true
            console.log('showFinalMsg', showFinalMsg.value)

            console.log('company created')
        }else{
            console.log('company not created')
        }
    }
</script>

<template lang="">
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div class="prog-bar position-fixed top-7 left-6 right-20 z-10">
            <ProgressBar :value="progress"></ProgressBar>
        </div>
        <div class="flex-grow-1" v-if="showStepCompany">
            <h3 class="text-dark my-4 text-center font-weight-semibold">How large is your company?</h3>
            <div class="centering m-0 g-4 text-sm">
                <Button :class="amount?.id === selectAmountId &&  'bg-primary text-white'" class="px-4 py-2 text-primary border border-primary"  v-for="amount in companyLargeAmount" :key="amount" :label="amount?.label" @click="selectAmount(amount)" severity="help" text raised />
            </div>
            <div v-if="selectAmountId" class="d-flex justify-content-end border-top mt-6 position-absolute w-100 bottom-0">
                <Button @click="() => { showStepCompany = false; showStepSolution = true; }" label="Next" class=" next-btn text-xl bg-primary border border-primary text-white px-6 py-2 text-xl mt-6"/>
            </div>
        </div>    
        <div v-if="showStepSolution">
            <h3 class="text-dark my-4 text-center font-weight-semibold">Company work type?</h3>
            <div class="centering text-sm">
                <Button @click="selectSolution(solution)" :class="solution?.id === solutionId &&  'bg-primary text-white'" class="px-4 py-2 text-primary border border-primary"  v-for="solution in solutions" :key="solution" :label="solution?.label" severity="help" text raised />
            </div>
            <div class="d-flex justify-content-between w-100 border-top mt-6 gap-4 position-absolute bottom-0">
                <Button @click="() => { showStepCompany = true; showStepSolution = false; }" label="Prev" class="text-primary text-white border border-primary bg-light px-6 py-2 text-xl mt-6"/>
                <Button v-if="solutionId" @click="() => { showStepSolution = false; showStepInvite = true; }" label="Next" class="next-btn bg-primary border border-primary text-white px-6 py-2 text-xl mt-6"/>
            </div>
        </div>
    
        <div v-if="showStepInvite">
            <h3 class="text-dark my-4 text-center font-weight-semibold">Provide your Email</h3>
           
                <div class="centering">
                    <FloatLabel>
                        <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="invite" @Input="handleEmail"/>
                        <label>Email address</label>
                        <p v-if="validEmailStatus !== null && validEmailStatus !== true" class="text-danger text-center text-xs mt-2">Invalid Email!</p>
                    </FloatLabel>
                </div>
           
            <div class="d-flex justify-content-between w-100 border-top mt-6 gap-4 position-absolute bottom-0">
                <Button @click="() => { showStepSolution = true; showStepInvite = false; }" label="Prev" class="text-primary text-white border border-primary bg-light px-6 py-2 text-xl mt-6"/>
                <Button v-if="pForEmail" @click="() => { showStepInvite = false; showStepName = true; }" label="Next" class="next-btn bg-primary border border-primary text-white px-6 py-2 text-xl mt-6"/>
            </div>
        </div>
    
        <div v-if="showStepName">
            <h3 class="text-dark my-4 text-center font-weight-semibold">Lastly, Set Company Name.</h3>
         
                <div class="centering">
                    <FloatLabel>
                        <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/>
                        <label>Workspace name...</label>
                    </FloatLabel>
                </div>
                <div class="d-flex justify-content-between w-100 border-top mt-6 gap-4 position-absolute bottom-0">
                    <Button @click="() => { showStepInvite = true; showStepName = false; }" label="Prev" class=" text-white border border-primary bg-light px-6 py-2 text-xl mt-6"/>
                    <Button @click="handleCreateWorkspace" v-if="progress >= 60" class="bg-primary next-btn text-white px-6 py-2 text-xl mt-6" label="Create Company"/>
                </div>
        </div>
    
        <div class="final-msg" v-if="showFinalMsg">
            <h3 class="text-dark my-4 text-black text-center font-weight-semibold">Company created successfully</h3>
           
            <div class="centering">
                <FloatLabel>
                    <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                    <p class="font-xl">You can close the modal now.</p>
                </FloatLabel>
            </div>
        </div>
    </div>

 
    
</template>

<style lang="scss" scoped>
.position-fixed {
    position: fixed;
}

.top-7 {
    top: 2.5rem;
}

.left-6 {
    left: 1.5rem;
}

.right-20 {
    right: 5rem;
}

.z-10 {
    z-index: 10;
}

.min-vh-100 {
    min-height: 100vh;
}

.text-xs {
    font-size: 0.75rem;
}

.next-btn{
    float: right;
}

.centering{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:7px;
    flex-wrap: wrap;
    button{
        text-wrap: nowrap;
    }
}

.text-danger{
    color: red;
}

.final-msg{
    z-index: 100000 !important;
}

.prog-bar {
    top: 24px;
}

.modal-container{
    height: 300px;
    
}
</style>
