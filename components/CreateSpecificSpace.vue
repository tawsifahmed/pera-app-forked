<template>
    <div class="position-relative d-flex flex-column justify-content-between w-100 modal-container">
        <div class="fixed top-[8px] w-[94%] flex justify-center text-center">
            <p class="bg-indigo-500 text-white rounded-md w-[fit-content] px-5">Company: {{singleCompany?.name}}</p>
        </div>
      <div class="fixed mt-2 top-8 left-6 right-20 z-10">
          <ProgressBar ogressBar :value="progValue"></ProgressBar> 
      </div>
      <div v-if="showCreateSpace">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Create New Space</h1>
          <div class="m-0 pt-6 pb-6">
              <div class="w-1/2 mx-auto">
                  <FloatLabel>
                      <InputText type="text" class="w-full px-4 py-2 shadow border border-purple-500 focus:border-purple-500" v-model="spaceNameInput" />
                      <label>Set Space Name</label>
                      
                  </FloatLabel>
              </div>
          </div>
          <div v-if="spaceNameInput" class="flex items-center justify-end border-t mt-6 absolute w-full bottom-0">
            <Button @click="() => { showCreateSpace = false; showSpaceDescription = true;  }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
        </div>
      </div>
      <div v-if="showSpaceDescription">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Space Description</h1>
          <div class="m-0 pt-6 pb-6">
              <div class="w-1/2 mx-auto">
                  <FloatLabel>
                      <InputText type="text" class="w-full px-4 py-2 shadow border border-purple-500 focus:border-purple-500" v-model="spaceDescripInput"/>
                      <label>Set Space Description</label>
                      
                  </FloatLabel>
              </div>
          </div>
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
            <Button @click="() => { showCreateSpace = true; showSpaceDescription = false;  }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
            <Button v-if="spaceDescripInput" @click="() => { showSpaceDescription = false; showSetSpaceColor = true }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
        </div>
      </div>
      <div v-if="showSetSpaceColor">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Set Space Color</h1>
          <div class="m-0 pt-6 pb-6">
            <div class="flex justify-center items-start">
              <div id="dynamic-div" ref="dynamicDiv" class="flex items-center justify-center text-3xl me-4">S</div>
              <div>
                <p class="text-xs ms-2 mb-1">COLORS</p>
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
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
              <Button @click="() => { showSpaceDescription = true; showSetSpaceColor = false; }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
              <Button v-if="spaceAvatarPreview" @click="() => { showSetSpaceColor = false; showShareCreatedSpace = true; }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
          </div>
      </div>

      <!--  -->

      <div v-if="showShareCreatedSpace">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Share created space</h1>
          <div class="m-0 pt-6 pb-6">
            <div class="flex justify-center">
              <div class="flex justify-center gap-4 w-full">
                <div
                  class="border-4 w-[40%] flex flex-col gap-3 justify-center items-center py-3 cursor-pointer"
                  :class="{ 'border-purple-500': selectedShareSpace === 'singularity' }"
                  @click="handleSelectShareSpace('singularity')"
                >
                  <img
                    class="w-20 inline-block"
                    src="@/assets/images/icons/people-100.png"
                    alt="Workflow"
                  />
                  <p :class="{ 'text-purple-500': selectedShareSpace === 'singularity' }">Singularity Tech Workspace</p>
                </div>
                <div
                  class="border-4 w-[40%] flex flex-col gap-3 justify-center items-center py-3 cursor-pointer"
                  :class="{ 'border-purple-500': selectedShareSpace === 'private' }"
                  @click="handleSelectShareSpace('private')"
                >
                  <img
                    class="w-16 inline-block mt-3 mb-2"
                    src="@/assets/images/icons/secure-100.png"
                    alt="Workflow"
                  />
                  <p :class="{ 'text-purple-500': selectedShareSpace === 'private' }">Private</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
              <Button @click="() => { showSetSpaceColor = true; showShareCreatedSpace = false; }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
              <Button v-if="selectedShareSpace" @click="() => { showShareCreatedSpace = false; showSetupSpaceTask = true; }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
          </div>
      </div>

      <!--  -->

      <div v-if="showSetupSpaceTask">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Setup space task status</h1>
          <div class="m-0 pt-6 pb-6">
            <div class="">
              <div class="w-full">
                <div>
                  <p class="uppercase text-xs mb-1">Add task statuses</p>
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-1">
                      <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="h-5" />
                    <InputGroup class="border rounded w-[80%] md:w-[50%]">
                      <InputText class="ps-2 text-xs" v-model="taskStatusName" placeholder="ex: TO-DO, DOING" />
                      <InputGroupAddon @click="addTaskStatus" class="cursor-pointer rounded border-l hover:bg-slate-100 active:bg-purple-300">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                      </InputGroupAddon>
                    </InputGroup>
                    </div>
                    <p v-if="addTaskSTatusError" class="text-red-500 text-xs">Please Type task name!</p>
                  </div>
                  <div class="rounded flex flex-col gap-1 mt-3 ms-7">
                    <div class="flex" v-for="(task, index) in taskStatusList">
                        <div class="flex border rounded-s-none w-[20%] rounded">
                          <div class="me-2 px-2 w-3 " :style="{ backgroundColor: task.taskColor }"></div>
                          <p class="uppercase tracking-tight text-md flex justify-center items-center mt-0">{{ task.taskName }}</p>
                        </div>
                        <div @click="handleDeleteTask(index)" class="cursor-pointer ms-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 pt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                          
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
              <Button @click="() => { showSetSpaceColor = true; showSetupSpaceTask = false; }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
              <Button v-if="taskStatusNullCheck" @click="() => { showSetupSpaceTask = false; showEnableFeatures = true; }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
          </div>
      </div>

      <!--  -->

      <div v-if="showEnableFeatures">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Enable Space Features</h1>
          <div class="m-0 pt-6 pb-6">
            <div class="">
              <div class="w-full">
                <div>
                   <div class="card flex justify-center">
                      <InputSwitch @click="handleAllFeatures" v-model="checked" />
                      <p class="ms-1 mb-2">Turn on/off all features</p>
                  </div>
                  </div> 
                  <div class="grid grid-cols-2 gap-2">
                    <div v-for="(featureCard, index) in enableSpaceFeaturesList">
                      <div @click="handleFeaturesSelection(index)" class="flex flex-col gap-2 items-center justify-center border rounded p-4 cursor-pointer hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 ease-in-out"
                      :class="{'bg-purple-100': featureCard.selected}"  
                      >
                      <div v-if="featureCard.selected" v-html="featureCard.selectedicon"></div>
                          <div v-else v-html="featureCard.icon"></div>
                          <p :style="{ color: featureCard.selected ? '#8b5cf6' : 'black' }" class="text-xs">{{ featureCard.text }}</p>

                      </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
              <Button @click="() => { showSetupSpaceTask = true; showEnableFeatures = false; }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
              <Button v-if="featureSelectionChecker" @click="() => { showEnableFeatures = false; showDefaultViews = true; }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
          </div>
      </div>

      <!--  -->

      <div v-if="showDefaultViews">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Default settings for views</h1>
          <div class="m-0 pt-6 pb-6">
            <div class="">
              <div class="w-full">
                <div class="grid grid-cols-2 gap-2">
                  <div v-for="(views, index) in defaultViewSettings">
                    <div class="flex gap-2 items-center justify-between border rounded p-4 cursor-pointer hover:bg-purple-100 active:bg-purple-200 transition-all duration-200 ease-in-out">
                      <div>
                        <div v-html="views.icon"></div>
                      <p class="text-xs">{{ views.text }}</p>
                      </div>
                      <InputSwitch @click="handleDefViews(views)" v-model="views.id" :value="views.id" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
              <Button @click="() => { showEnableFeatures = true; showDefaultViews = false; }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
              <Button v-if="defViewsChecker" @click="() => { showDefaultViews = false; showSpacePreview = true; }" label="Next" class="bg-purple-500 border border-purple-500 text-white px-6  py-1 rounded-md mt-6 tracking-wide"/>
          </div>
      </div>

      <!--  -->

      <div v-if="showSpacePreview">
          <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Space Preview</h1>
          <div class="m-0 pt-2 pb-6 flex flex-col gap-1">
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Space Name</div>
              <div>XYZ</div>
            </div>
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Space Description</div>
              <div>QWERTYUIOPO</div>
            </div>
            
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Avatar</div>
              <div  ref="spaceColorPreview" class="flex items-center justify-center text-xl me-4 border-none px-3 rounded-lg">S</div>
            </div>
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Shared with</div>
              <div>Private</div>
            </div>
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Task Statuses</div>
              <div class="flex gap-1 justify-start">
                <div v-for="(task) in taskStatusList" class="flex gap-1 justify-start">
                    <div
                    :style="{ backgroundColor: task.taskColor}" 
                    class=" w-2 px-3 rounded shadow-sm tskk">
                          <p class="invisble">1</p>
                    </div>
                    <!-- <div class="bg-purple-500 w-2 text-purple-500 px-3 rounded shadow-sm">
                          1
                    </div>
                    <div class="bg-cyan-500 w-2 text-cyan-500 px-3 rounded shadow-sm">
                          1
                    </div>
                    <div class="bg-orange-500 w-2 text-orange-500 px-3 rounded shadow-sm">
                          1
                    </div> -->
                  </div>
              </div>
            </div>
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Space Features</div>
              <div class="flex gap-2">
                <div class=" shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
                </div>
                <div class=" rounded shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <div class=" rounded shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div class=" rounded shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center border border-purple-500 py-2 px-2">
              <div class="font-semibold">Default Views</div>
              <div class="flex gap-2">
                <div class=" shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div class=" rounded shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" color="#8b5cf6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between w-full border-t mt-6 gap-4 absolute bottom-0">
            <Button @click="() => { showDefaultViews = true; showSpacePreview = false; }" label="Prev" class="text-purple-500 border border-purple-500 bg-purple-100 px-6  py-1 rounded-md mt-6 tracking-wide"/>
            <Button @click="handleCreateSpace" class="bg-purple-500 text-white py-2 px-6 mt-6 tracking-wide" label="Create Space"/>
          </div>
      </div>
      <div v-if="showFinalMsg">
        <h1 class="text-slate-700 mb-4 text-center font-semibold tracking-wide left-3">Space created successfully</h1>
        <div class="m-0 pt-6 pb-6">
            <div class="w-1/2 mx-auto flex flex-col">
                <FloatLabel class="">
                    <!-- <InputText type="email" class="w-full px-4 py-2 shadow border border-purple-500 focus:border-purple-500" v-model="workSpaceName"/> -->
                    <label>You can close the modal now.</label>
                </FloatLabel>
            </div>
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
const showFinalMsg = ref(false);

const progValue = ref(12.5);

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
        progValue.value = progValue.value  + progressForName
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
        progValue.value = progValue.value  + progressForName
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
      progValue.value += 12.5
    }
    else{
      progValue.value = progValue.value;
    }
  }
  else{
    progValue.value -= 12.5
  }

  console.log('spaceAvatarPreview', spaceAvatarPreview.value);
  progValue.value = progValue.value;
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

        progValue.value = progValue.value + progressForselectedShareSpace

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

        progValue.value = progValue.value + progressFortaskStatusNullCheck
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

        progValue.value = progValue.value + progressForfeatureSelectionChecker
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

        progValue.value = progValue.value + progressFordefViewsChecker
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
            showSpacePreview.value = false
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
  color: black
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


  
</style>