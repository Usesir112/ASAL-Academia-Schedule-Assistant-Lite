<template>
  <div :class="`text-${subject.subjectBranch}`">
    <!-- Header -->
    <!-- Here -->
    <div
      class="card bg-white kanit-600-16 flex flex-col cursor-pointer"
      :class="`hover:bg-${subject.subjectBranch} hover:text-white duration-100 `"
      @click="collapsed()"
    >
      <div class="w-full flex items-center">
        <!-- Tag in front of card -->
        <div class="w-3 rounded-l-lg py-3" :class="`bg-${subject.subjectBranch}`">
          <span class="text-transparent">r</span>
        </div>
        <!-- Tag in front of card -->

        <div class="flex">
          <div class="ml-5">{{ subject.subjectNum }}</div>
          <div class="ml-5 truncate w-80">
            {{ subject.subjectName }}
          </div>
          <div class="ml-5 truncate w-20 text-center">
            {{ subject.subjectInstructor }}
          </div>
          <div class="ml-5">{{ subject.subjectUnit }}</div>
          <div class="ml-5">ชั้นปีที่ {{ subject.subjectYear }}</div>
          <div class="ml-5 uppercase w-10 text-center">{{ subject.subjectBranch }}</div>
          <div class="ml-5">จำนวนกลุ่มเรียน: {{ subject.subjectGroup }}</div>
        </div>

        <div class="ml-auto mr-3">{{ subject.isLabSubject ? "(ป.)" : "(ท.)" }}</div>
      </div>
    </div>
    <!-- Header -->

    <!-- Content -->
    <div
      class="transition-all duration-500 overflow-hidden bg-white px-3 shadow-md rounded-b-md font-medium"
      :class="isCollapsed ? 'max-h-[20rem]' : 'max-h-0'"
    >
      <div class="p-5 flex flex-col">
        <!-- First Column, Include Subject Code, Name, Lerturer -->
        <div class="p-3 grid grid-cols-8">
          <form-input
            :disabled="disabled"
            label="รหัสวิชา"
            :value="subject.subjectNum"
          />
          <form-input
            :disabled="disabled"
            label="ชื่อวิชา"
            :value="subject.subjectName"
            class="col-span-4"
          />
          <form-input
            :disabled="disabled"
            label="อาจารย์ผู้สอน"
            :value="subject.subjectInstructor"
            class="col-span-3"
          />
        </div>

        <!-- Second column, Include ... -->
        <div class="p-3 grid grid-cols-8">
          <form-input
            :disabled="disabled"
            label="ชั้นปี"
            :value="subject.subjectYear"
          />
          <form-input
            :disabled="disabled"
            label="สาขา"
            :value="subject.subjectBranch"
          />
          <form-input
            :disabled="disabled"
            label="หน่วยกิต"
            :value="subject.subjectUnit"
          />
          <form-input
            :disabled="disabled"
            label="จำนวนกลุ่มเรียน"
            :value="subject.subjectGroup"
          />
          <form-input
            :disabled="disabled"
            label="หลักสูตร"
            :value="subject.subjectCourseY"
          />
          <form-input
            :disabled="disabled"
            label="กลุ่มวิชา"
            :value="subject.subjectType"
            class="col-span-2"
          />
          <form-input
            :disabled="disabled"
            label="ประเภทวิชา"
            :value="subject.isLabSubject ? 'ปฎิบัติ' : 'ทฤษฎี'"
          />
        </div>

        <!-- Third coulumn, Include Button Action -->
        <div class="p-3 mr-1 flex justify-end">
          <button class="mx-1 btn-outline-bit" @click="openDeleteModal">
            ลบวิชา
          </button>
          <button
            class="mx-1 btn-sol-dsba transition-all duration-300"
            @click="copyBtn"
          >
            {{ copy ? "คัดลอก" : "คัดลอกแล้ว" }}
          </button>
          <button class="mx-1 btn-sol-warning" @click="disabled = !disabled">
            แก้ไข
          </button>
          <button class="mx-1 btn-sol-bit" :disabled="disabled">ยกเลิก</button>
          <button class="mx-1 btn-sol-ai" :disabled="disabled">บันทึก</button>
        </div>
      </div>
      <modal-delete
        :object="'วิชา'"
        :show="deleteModal"
        @cancel="cancelDeleteModal"
        @confirm="confirmDeleteModal"
      />
    </div>
    <!-- Content -->
  </div>
</template>
<script>
import FormInput from "./FormInput.vue";
export default {
  components: { FormInput },
  data() {
    return {
      copy: true,
      deleteModal: false,
      isCollapsed: false,
      disabled: true,
    };
  },
  methods: {

    collapsed() {
      this.isCollapsed = !this.isCollapsed;
      this.disabled = true;
    },

    openDeleteModal() {
      this.deleteModal = true;
    },

    cancelDeleteModal() {
      this.deleteModal = false;
    },

    confirmDeleteModal() {
      this.deleteModal = false;
    },

    copyBtn() {
      const subjectJSON = JSON.stringify(this.subject)
      navigator.clipboard.writeText(subjectJSON)
      navigator.clipboard.readText()
      .then((data) => console.log(data))
      this.copy = !this.copy;
      setTimeout(() => {
        this.copy = !this.copy;
      }, 1000);
    },
  },
  props: {
    subject:{},
  },
};
</script>
<style lang="sass" scoped>
@import "@/sass/_component.sass"
</style>
