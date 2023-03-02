<template>
  <div :class="`text-${subject.subjectBranch}`">
    <!-- Header -->
    <div
      class="card bg-white kanit-600-16 flex flex-col cursor-pointer"
      :class="hoverHeader(subject.subjectBranch)"
      @click="collapsed()"
    >
      <div class="w-full flex items-center">
        <!-- Tag in front of card -->
        <div
          class="w-3 rounded-l-lg py-3"
          :class="`bg-${subject.subjectBranch}`"
        >
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
          <div class="ml-5 uppercase w-10 text-center">
            {{ subject.subjectBranch }}
          </div>
          <div class="ml-5">จำนวนกลุ่มเรียน: {{ subject.subjectGroup }}</div>
        </div>

        <div class="ml-auto mr-3">
          {{ subject.isLabSubject ? "(ป.)" : "(ท.)" }}
        </div>
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
            v-model="editingState.subjectNum"
          />
          <form-input
            :disabled="disabled"
            label="ชื่อวิชา"
            v-model="editingState.subjectName"
            class="col-span-4"
          />
          <form-input
            :disabled="disabled"
            label="อาจารย์ผู้สอน"
            v-model="editingState.subjectInstructor"
            class="col-span-3"
          />
        </div>

        <!-- Second column, Include ... -->
        <div class="p-3 grid grid-cols-8">
          <form-input
            :disabled="disabled"
            label="ชั้นปี"
            v-model="editingState.subjectYear"
          />
          <form-input
            :disabled="disabled"
            label="สาขา"
            v-model="editingState.subjectBranch"
          />
          <form-input
            :disabled="disabled"
            label="หน่วยกิต"
            v-model="editingState.subjectUnit"
          />
          <form-input
            :disabled="disabled"
            label="จำนวนกลุ่มเรียน"
            v-model="editingState.subjectGroup"
          />
          <form-input
            :disabled="disabled"
            label="หลักสูตร"
            v-model="editingState.subjectCourseY"
          />
          <form-input
            :disabled="disabled"
            label="กลุ่มวิชา"
            v-model="editingState.subjectType"
            class="col-span-2"
          />
          <div class="flex flex-col mx-2">
            <label>ประเภทวิชา</label>
            <select
              v-model="editingState.isLabSubject"
              :disabled="disabled"
              class="shadow rounded-lg py-2 px-5 mt-2 transition-all duration-300 focus:shadow-lg focus:outline-none cursor-pointer focus:cursor-text disabled:text-disable-100 disabled:cursor-not-allowed"
            >
              <option value="ทฤษฏี">ทฤษฏี</option>
              <option value="ปฏิบัติ">ปฏิบัติ</option>
            </select>
          </div>
          <!-- <form-input
            :disabled="disabled"
            label="ประเภทวิชา"
          /> -->
        </div>

        <!-- Third coulumn, Include Button Action -->
        <div class="p-3 mr-1 flex justify-end">
          <button
            class="mx-1 btn-outline-bit"
            @click="openDeleteModal(subject.subjectNum)"
          >
            ลบวิชา
          </button>
          <button
            class="mx-1 btn-sol-dsba transition-all duration-300"
            @click="copyBtn"
          >
            {{ copy ? "คัดลอก" : "คัดลอกแล้ว" }}
          </button>
          <button
            class="mx-1 btn-sol-warning"
            @click="disabled = !disabled"
            v-show="disabled"
          >
            แก้ไข
          </button>
          <button
            class="mx-1 btn-sol-bit"
            :disabled="disabled"
            @click="disabled = !disabled"
            v-show="!disabled"
          >
            ยกเลิก
          </button>
          <button
            class="mx-1 btn-sol-ai"
            :disabled="disabled"
            @click="saveEdit"
            v-show="!disabled"
          >
            บันทึก
          </button>
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
      getAllSubject: this.allSubjects,
      copy: true,
      deleteModal: false,
      isCollapsed: false,
      disabled: true,
      editingState: {
        subjectNum: this.subject.subjectNum,
        subjectName: this.subject.subjectName,
        subjectCourseY: this.subject.subjectCourseY,
        subjectType: this.subject.subjectType,
        subjectInstructor: this.subject.subjectInstructor,
        subjectUnit: this.subject.subjectUnit,
        subjectGroup: this.subject.subjectGroup,
        subjectYear: this.subject.subjectYear,
        subjectBranch: this.subject.subjectBranch,
        subjectTheoryGroupNum: this.subject.subjectTheoryGroupNum,
        subjectLabGroupNum: this.subject.subjectLabGroupNum,
        isLabSubject: this.subject.isLabSubject ? "ปฏิบัติ" : "ทฤษฏี",
      },
    };
  },
  beforeUpdate() {
    console.log(this.editingState.subjectName);
  },
  updated() {
    console.log(this.editingState.subjectName);
  },
  methods: {
    hoverHeader(color) {
      let className = "hover:text-white duration-100 ";
      const bgColor = {
        it: "hover:bg-it",
        dsba: "hover:bg-dsba",
        bit: "hover:bg-bit",
        ai: "hover:bg-ai",
      };

      className += bgColor[color];

      return className;
    },

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
      this.deleteSubject();
    },

    deleteSubject() {
      this.getAllSubject.splice(this.getAllSubject.indexOf(this.subject), 1);
    },

    copyBtn() {
      this.subjectJSON = JSON.stringify(this.subject);
      navigator.clipboard.writeText(subjectJSON);
      navigator.clipboard.readText().then((data) => console.log(data));
      this.copy = !this.copy;
      setTimeout(() => {
        this.copy = !this.copy;
      }, 1000);
    },

    saveEdit() {
      this.disabled = !this.disabled;

      const index = this.getAllSubject.indexOf(this.subject);
      this.getAllSubject.splice(index, 1, this.editingState);
    },
  },

  props: {
    subject: {},
    allSubjects: {},
  },
};
</script>
<style lang="sass" scoped>
@import "@/sass/_component.sass"
</style>
