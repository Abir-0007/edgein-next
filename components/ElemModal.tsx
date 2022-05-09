
export const ElemLogo = (props: { mode: 'logo'|'icon', className?: string}  = { mode: 'logo'}) => (<div></div>)
/* <template>
  <div
    v-show="value"
    class="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    :class="!value ? 'pointer-events-none' : ''"
  >
    <div
      class="
        flex
        items-center
        justify-center
        overflow-y-scroll
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
        translate-y-0
      "
    >
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="value"
          class="fixed inset-0 bg-white bg-opacity-80 transition-opacity z-0"
          aria-hidden="true"
        />
      </transition>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-if="value"
          class="
            inline-block
            align-bottom
            bg-white
            rounded-lg
            px-4
            pt-5
            pb-4
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
          "
          :style="{ transform: 'translateZ(0)' }"
          @click.stop
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-10
              w-10
              p-2
              rounded-full
              absolute
              z-10
              right-4
              bg-gray-100
              text-primary-500
              hover:text-white hover:bg-primary-500
              cursor-pointer
              transition-all
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click.prevent="close"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { onResetUi } from '~/util/index'

export default defineComponent({
  name: 'ElemModal',
  inheritAttrs: false,
  props: {
    value: { type: Boolean, default: false },
  },

  setup(props, { emit }) {
    /**
     * Close the modal

    const close = () => {
      emit('input', !props.value)
    }

    onResetUi(() => close())

    return {
      close,
    }
  },
})
</script> */