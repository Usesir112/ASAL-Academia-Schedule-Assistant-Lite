<template>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" class="relative z-10">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </HeadlessTransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
            >
              <div class="flex items-center text-red-700">
                <div class="ml-6 text-[3rem]">
                  <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                </div>

                <div class="w-full">
                  <HeadlessDialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-red-700 pt-6 px-6"
                  >
                    เดี๋ยวก่อน!
                  </HeadlessDialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 px-6 pb-6">
                      คุณกำลังจะลบ {{ object }} คุณแน่ใจหรือไม่
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-4 flex grid grid-cols-2">
                <div>
                  <button
                    type="button"
                    class="w-full inline-flex justify-center border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-200 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="$emit('cancel')"
                  >
                    ยกเลิก
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="w-full inline-flex justify-center border border-transparent bg-bit-100 px-4 py-2 text-sm font-medium text-bit hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="$emit('confirm')"
                  >
                    ยืนยันการลบ
                  </button>
                </div>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
<script lang="ts">
export default {
  props: {
    object: {},
    isOpen: {type: Boolean},
  },
};
</script>
