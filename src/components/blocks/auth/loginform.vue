<template>
    <div class="mx-4 text-white md:w-[400px] md:mx-auto">
      <div class="my-20">
        <FormKit
          id="login"
          type="form"
          form-class="my-10 w-full flex justify-content items-center flex-col"
          outer-class="w-full flex justify-content items-center flex-col"
          inner-class="w-full flex justify-content items-center flex-col"
          message-class="text-red-500 text-sm mt-2"
          :actions="false"
          submit-label="Register"
          @submit="submitHandler"
        >
          <h1 class="font-bold text-center lg:text-3xl 2xl:text-4xl">Secaas</h1>
          <p class="description mb-5 text-base font-semibold mt-4 text-center leading-8">
            All in one secrets management platform
          </p>
  
          <FormKit
            type="email"
            name="email"
            outer-class="w-full"
            input-class="$reset px-4 py-2.5 text-gray-200  bg-input_bg w-full border-none focus:outline-none !important shadow-none"
            label-class=""
            inner-class="$reset mt-2 rounded-md  overflow-hidden bg-input_bg w-full border-none focus:outline-none !important shadow-none"
            :delay="1000"
            validation="required|length:5|email"
            message-class="text-red-500 text-sm mt-2"
          >
            <template #label>
              <p class="text-md text-gray-200 mb-2">Email <span class="text-primary">*</span></p>
            </template>
          </FormKit>
          <FormKit
            type="password"
            name="password"
            outer-class="w-full"
            input-class="$reset px-4 py-2.5 text-white  bg-input_bg w-full border-none focus:outline-none !important shadow-none"
            label-class=""
            inner-class="$reset mt-2 rounded-md  overflow-hidden bg-input_bg w-full border-none focus:outline-none !important shadow-none"
        
            message-class="text-red-500 text-sm mt-2"
            label="Password"
           :delay="1000"
            validation="required"
            :suffix-icon="eyeIcon"
            suffix-icon-class="w-2 cursor-pointer right-0 h-2 top-3 text-gray-500 absolute ml-auto mr-[30px]"
            @suffix-icon-click="handleIconClick"
          >
            <template #label>
              <div class="w-full flex justify-between items-center">
                <p class="text-md text-white my-2">
                  Password <span class="text-primary">*</span>
                </p>
                <router-link to="/reset-password" class="text-primary flex text-sm">
                  Forgot Password?
                </router-link>
              </div>
            </template></FormKit
          >
  
          <div class="w-full flex justify-center mt-5 items-center">
            <FormKit
              :loading="loading"
              :type="submitButton"
              input-class="$reset flex justify-center items-center text-center py-2.5  bg-primary w-full"
              inner-class="$reset  rounded-md  overflow-hidden  w-full border-none focus:outline-none !important shadow-none"
              outer-class="w-full"

              text="Sign In"
            >
            </FormKit>
          </div>
        </FormKit>
        <p class="w-full text-center">New to Secass ? <router-link to="/signup"><span class="text-primary  text-sm px-2 cursor-pointer"> Sign Up </span></router-link> </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import customSubmit from '@/components/formkit/customSubmit.vue';
import { useAuthStore } from '@/store/useAuthStore';

  
  import { createInput } from '@formkit/vue';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
  const submitButton = createInput(customSubmit, {
    props: ['text', 'loading']
  })

  const loading: Ref<boolean> = ref(false)
  const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
  </svg>
  `
  const eyeClosed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
  </svg>
  `
  const handleIconClick = (node: { props: { suffixIcon: string; type: string; }; }, e: any) => {
    node.props.suffixIcon = node.props.suffixIcon === eyeIcon ? eyeClosed : eyeIcon
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
    console.log(e)
  }

  const data = ref(null)
  const store = useAuthStore();
  const router = useRouter()
  
  const submitHandler = async (val:any) => {
    loading.value = true;
    const payload = {
      name:'',
      passHash:val.password,
      email:val.email,
    }
    const res = await store.signIn(payload);
    if(res){
      router.push('/app/dashboard');
    }
  }
  </script>
  
  <style scoped></style>
  