<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
      
      <div v-if="spaceFormInputs">
              <div class="company-name flex justify-center text-center mb-5">
                <p class="bg-indigo-500 text-white rounded company-name px-3 py-1">Company: {{singleCompany?.name}}</p>
            </div>
            <FloatLabel>
              <InputText type="text" class="w-full px-4 py-2 shadow border border-purple-500 focus:border-purple-500" v-model="spaceNameInput" />
              <label>Set Space Name</label>
              
          </FloatLabel>
          <br>
          <br>
          <FloatLabel>
            <InputText type="text" class="w-full px-4 py-2 shadow border border-purple-500 focus:border-purple-500" v-model="spaceDescripInput"/>
            <label>Set Space Description</label>
            
          </FloatLabel>
          <br>
          <h4 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Set Space Color</h4>
          <div class="m-0 pb-6 d-flex justify-content-center colorpicker-wrapper">
            <div class="flex justify-center items-start">
              <div id="dynamic-div" ref="dynamicDiv" class="d-flex align-items-center justify-content-center text-3xl">S</div>
              <div class="ml-2">
                <p class="text-xs ml-2 mb-1">COLORS</p>
                <div class="flex">
                    <div id="crimson" class='color' @click="changeColor"></div>
                    <div id="skyblue" class='color' @click="changeColor"></div>
                    <div id="orange" class='color' @click="changeColor"></div>
                    <div id="purple" class='color' @click="changeColor"></div>
                    <div id="cadetblue" class='color' @click="changeColor"></div>
                    <div id="burlywood" class='color' @click="changeColor"></div>
                    <div id="pink" class='color' @click="changeColor"></div>
                    <div id="lightseagreen" class='color' @click="changeColor"></div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="create-btn-wrapper">
            <Button @click="handleCreateSpace" class="bg-purple-500 text-white py-2 px-6 tracking-wide" label="Create Space"/>
          </div>
      </div>


      <div v-if="showFinalMsg">
        <h3 class="text-dark my-4 text-black text-center font-weight-semibold">Space created successfully</h3>
           
        <div class="centering">
            <FloatLabel>
                <!-- <InputText type="email" class="w-100 px-4 py-2 shadow border border-primary focus:border-primary" v-model="workSpaceName"/> -->
                <p class="font-xl">You can close the modal now.</p>
            </FloatLabel>
        </div>
    </div>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useCompanyStore } from '~/store/company'; // import the auth store we just created
const { createSpace } = useCompanyStore(); // use authenticateUser action from  auth store
const { isSpaceCreated } = storeToRefs(useCompanyStore()); 
import ColorPicker from 'primevue/colorpicker';
import InputSwitch from 'primevue/inputswitch';

const {singleCompany} = defineProps(['singleCompany']);


const showCreateSpace = ref(true);
const showSpaceDescription = ref(false);
const showSetSpaceColor = ref(false);
const showShareCreatedSpace = ref(false);
const showSetupSpaceTask = ref(false);
const showEnableFeatures = ref(false);
const showDefaultViews = ref(false);
const showSpacePreview = ref(false); 
const spaceFormInputs = ref(true);
const showFinalMsg = ref(false);

const progress = ref(12.5);

const dynamicDiv = ref(null);

const spaceAvatarPreview = ref(null);

const spaceNameInput = ref(null);


watch(spaceNameInput, (newVal, oldVal) => {
        let progressForName
        if(oldVal === '' && newVal !== ''){
            progressForName = 12.5
            
        }else if(oldVal !== '' && newVal === ''){
            progressForName = -12.5
            
        }
        else if(oldVal === null && newVal !== null){
            progressForName = 12.5
           
        }else {
            progressForName = 0
        }
        progress.value = progress.value  + progressForName
    })

const spaceDescripInput = ref(null);

watch(spaceDescripInput, (newVal, oldVal) => {
        let progressForName
        if(oldVal === '' && newVal !== ''){
            progressForName = 12.5
            
        }else if(oldVal !== '' && newVal === ''){
            progressForName = -12.5
            
        }
        else if(oldVal === null && newVal !== null){
            progressForName = 12.5
           
        }else {
            progressForName = 0
        }
        progress.value = progress.value  + progressForName
    })


const selectedShareSpace = ref(null);

const taskStatusName = ref('');

const taskStatusList = ref([]);

const colorHEX = ref('6466f1');

const taskStatusNullCheck = ref(null);

const addTaskSTatusError= ref(false);

const checked = ref(false);

const checkedViews = ref([]);

const defViewsChecker = ref(null);

const spaceColorPreview = ref(null);

const selectedFeatures = ref([]);

const enableSpaceFeaturesList = ref([ 
      { id: 1,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
          </svg>
          `,  
        text: "Priority"
        
      },
      { id: 2,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
          </svg>
          `,
        text: "Sprints"
      }, 
      { id: 3,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          `,
        text: "Email"
      },
      { id: 4,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>
          `,
        text: "Tags"
      },
      { id: 5,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          `,
        text: "Custom Fields"
      },
      { id: 6,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
           </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
           </svg>
          `,
        text: "Multiple Assignes"
      },
      { id: 7,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          `,
        text: "Time Tracking"
      },
      { id: 8,
        icon:
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>
          `,
          selectedicon:
          `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>
          `,
        text: "Time Estimates"
      },
]);

const featureSelectionChecker = ref(false);

const defaultViewSettings = ref([
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
                `,
    selectedICON: `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
    `,
    text: "List"            
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
        </svg>
        `,
    selectedICON: `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>
`    ,
    text: "Board"
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>
        `,
    selectedICON: `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>

`    ,
    text: "Calender"
  },
  {
    id: 4,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>

        `,
    selectedICON: `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>`    ,
    text: "Map"
  },
  {
    id: 5,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>


        `,
    selectedICON: `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>
`    ,
    text: "Activity"
  },
  {
    id: 6,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>



        `,
    selectedICON: `<svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>

`    ,
    text: "Team"
  },
]);

watch(spaceAvatarPreview, (newV, oldV) => {
  console.log('newV', newV);
  console.log('oldV', oldV);
  if(spaceAvatarPreview.value){
    if(newV !== null && oldV === null){
      progress.value += 12.5
    }
    else{
      progress.value = progress.value;
    }
  }
  else{
    progress.value -= 12.5
  }

  console.log('spaceAvatarPreview', spaceAvatarPreview.value);
  progress.value = progress.value;
});


const changeColor = (event) => {
  if(dynamicDiv.value.style.backgroundColor === event.target.id){
    dynamicDiv.value.style.border = '2px solid black';
    dynamicDiv.value.style.backgroundColor = null;
    dynamicDiv.value.style.color = null;
    spaceAvatarPreview.value = null;
    spaceColorPreview.value.style.border = '2px solid black';
    spaceColorPreview.value.style.backgroundColor = null;
    spaceColorPreview.value.style.color = null;

  }else{
    dynamicDiv.value.style.backgroundColor = event.target.id;
    dynamicDiv.value.style.color = 'white';
    dynamicDiv.value.style.border = 'none';
    let storeAvatarData = {
      bgcolor: event.target.id,
      color: 'white' 
    }
    spaceAvatarPreview.value = storeAvatarData.bgcolor;
    // console.log('storeAvatarData', spaceAvatarPreview.value);

    spaceColorPreview.value.style.backgroundColor = event.target.id;
    spaceColorPreview.value.style.color = 'white';
    spaceColorPreview.value.style.border = 'none';
  }
};

const shareSpaceInput = ref(null);

const handleSelectShareSpace = (selection) => {
  if (selectedShareSpace.value === selection) {
    selectedShareSpace.value = null;

  } else {
    selectedShareSpace.value = selection;
  }
};


watch(selectedShareSpace, (newV, oldV) => {

  let progressForselectedShareSpace
        if(newV !== null && oldV === null){
          progressForselectedShareSpace = 12.5
        }else if(newV === null && oldV !== null){
          progressForselectedShareSpace = -12.5
        }
        else{
          progressForselectedShareSpace = 0
        }

        progress.value = progress.value + progressForselectedShareSpace

});

const addTaskStatus = () => {
  taskStatusName.value ? addTaskSTatusError.value = false : addTaskSTatusError.value = true;
  if(taskStatusName?.value?.length > 0){
    
    const newTaskStatusList = {
    taskName: taskStatusName.value,
    taskColor: `#${colorHEX.value}`
   }
   taskStatusList.value.push(newTaskStatusList);
   taskStatusName.value = '';
   console.log('taskStatusListType', typeof taskStatusList.value);
   console.log('taskStatusList', taskStatusList.value);
  }else{
    addTaskSTatusError.value = true;
  }

  if(taskStatusList.value.length > 0){
    taskStatusNullCheck.value = true;
  }
};

const handleDeleteTask = (index) => {
  taskStatusList.value.splice(index, 1);
  console.log('taskStatusList', taskStatusList.value);
  console.log('ss',taskStatusList.value.length);
  if (taskStatusList.value.length == 0){
    taskStatusNullCheck.value = false;
  }
};

watch(taskStatusNullCheck, (newV, oldV) => {
  let progressFortaskStatusNullCheck
  console.log('taskSOLd', oldV)
  console.log('taskSNew', newV)
        if(newV === true && oldV === null){
          progressFortaskStatusNullCheck = 12.5
        }else if(newV === true && oldV === false){
          progressFortaskStatusNullCheck = 12.5
        }
        else if(newV === false && oldV === true){
          progressFortaskStatusNullCheck = -12.5
        }
        else{
          progressFortaskStatusNullCheck = 0
        }

        progress.value = progress.value + progressFortaskStatusNullCheck
});


console.log('taskStatusList', typeof taskStatusList.value);

const handleFeaturesSelection = (index) => {
//   enableSpaceFeaturesList.value[index].selected = !enableSpaceFeaturesList.value[index].selected;
//   console.log('enableSpaceFeaturesListch', enableSpaceFeaturesList.value[index].selected);

  
  
//   featureSelectionChecker.value = enableSpaceFeaturesList.value.some(item => item.selected);
    const selectedFeature = enableSpaceFeaturesList.value[index];
        selectedFeature.selected = !selectedFeature.selected;

        if (selectedFeature.selected) {
            // Add the selected feature to the selectedFeatures array
            selectedFeatures.value.push(selectedFeature);
            console.log('selectedFeatures', selectedFeatures.value);
        } else {
            // Remove the deselected feature from the selectedFeatures array
            const selectedIndex = selectedFeatures.value.findIndex(item => item.id === selectedFeature.id);
            if (selectedIndex !== -1) {
                selectedFeatures.value.splice(selectedIndex, 1);
            }
        }
        console.log('selectedFeatures', selectedFeatures.value);
    // Update featureSelectionChecker
    featureSelectionChecker.value = selectedFeatures.value.length > 0;
};

const handleAllFeatures = () => {
//   enableSpaceFeaturesList.value.forEach((item) => {
//     item.selected = !checked.value;
//     featureSelectionChecker.value = !checked.value;
//   });

    checked.value = !checked.value;
    enableSpaceFeaturesList.value.forEach(item => {
        item.selected = checked.value;

        if (checked.value) {
            // Add all features to selectedFeatures array
            selectedFeatures.value = [...enableSpaceFeaturesList.value];
            console.log('selectedFeatures', selectedFeatures.value);
        } else {
            // Clear selectedFeatures array if all features are deselected
            selectedFeatures.value = [];
        }
    });

    featureSelectionChecker.value = checked.value;
};

watch(featureSelectionChecker, (newV, oldV) => {
  let progressForfeatureSelectionChecker
        if(newV === true && oldV === null){
          progressForfeatureSelectionChecker = 12.5    
        }else if(newV === true && oldV === false){
          progressForfeatureSelectionChecker = 12.5
        }
        else if(newV === false && oldV === true){
          progressForfeatureSelectionChecker = -12.5
        }
        else{
          progressForfeatureSelectionChecker = 0
        }

        progress.value = progress.value + progressForfeatureSelectionChecker
});

const handleDefViews = (id) =>{
  const index = checkedViews.value.indexOf(id);
  if(index === -1){
    checkedViews.value.push(id);
  }else{
    checkedViews.value.splice(index, 1);
  }
  console.log('checkedViews', checkedViews.value);
  console.log('checkedViews', checkedViews.value.length);

  if(checkedViews.value.length > 0){
    defViewsChecker.value = true;
  }else{
    defViewsChecker.value = false;
  }
};

watch(defViewsChecker, (newV, oldV) => {
  let progressFordefViewsChecker
        if(newV === true && oldV === null){
          progressFordefViewsChecker = 12.5     
        }else if(newV === true && oldV === false){
          progressFordefViewsChecker = 12.5 
        }
        else if(newV === false && oldV === true){
          progressFordefViewsChecker = -12.5
        }
        else{
          progressFordefViewsChecker = 0
        }

        progress.value = progress.value + progressFordefViewsChecker
}); 

const handleCreateSpace = async () => {
        // const formData = new FormData()
        // formData.append('name', workSpaceName.value)
        // formData.append('size', wPeople.value)
        // formData.append('number_of_employees', numEmployees.value)
        // formData.append('company_role', rRole.value)

        const createSpaceData = {
            'name': spaceNameInput.value,
            'description': spaceDescripInput.value,
            'company_id': singleCompany.id,
            'color': spaceAvatarPreview.value,
            'shared_status': selectedShareSpace.value,
            'task_statuses': taskStatusList.value,
            'features': selectedFeatures.value,
            'views': checkedViews,
        }
        console.log('spaceData', createSpaceData)

        
        
        await createSpace(createSpaceData);

        if(isSpaceCreated.value === true){
            spaceFormInputs.value = false
            showFinalMsg.value = true   

            console.log('space created')
        }else{
            console.log('space not created')
        }
    }


onMounted(() => {
  // dynamicDiv.value.style.border = '2px solid black';
  // dynamicDiv.value.style.color = 'black';
  // spaceColorPreview.value.style.border = '2px solid black';
  // spaceColorPreview.value.style.color = 'black';
});


</script>

<style scoped>

#dynamic-div{
  height: 70px;
  width: 70px;
  border-radius: 18px;
  border: 2px solid black;
  color: black;
  display: flex;
}

.color{
  margin-left: 10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
}

#crimson{
  background-color: crimson;
}

#skyblue{
  background-color: skyblue;
}

#orange{
  background-color: orange
}

#purple{
  background-color: purple;
}

#cadetblue{
  background-color: cadetblue;
}

#burlywood{
  background-color: burlywood;
}

#pink{
  background-color: pink;
}

#lightseagreen{
  background-color: lightseagreen;
}


.tskk{
    color: transparent
}

.prog-bar {
  top: 24px;
}

.modal-container{
  
}

.company-name{
  border-radius: 5px;
}


.colorpicker-wrapper{
  display: flex;
}

.create-btn-wrapper{
  display: flex;
  justify-content: center;
}
  
</style>