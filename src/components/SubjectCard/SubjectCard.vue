<template>
  <div
    class="mt-3 rounded-lg bg-white drop-shadow flex items-center justify-between kanit-600-16"
    :class="`text-${subjectBranch} hover:bg-${subjectBranch} hover:text-white`"
  >
    <!-- Tag in front of card -->
    <div class="w-3 rounded-l-lg py-3"
    :class="`bg-${subjectBranch}`">
      <span class="text-transparent">r</span>
    </div>
    <!-- Tag in front of card -->

    <div class="flex">
      <div class="ml-5">{{ subjectNum }}</div>
      <div class="ml-5 truncate w-80">
        {{ subjectName }}
      </div>
      <div class="ml-5 truncate w-20 text-center">
        {{ subjectInstructor }}
      </div>
      <div class="ml-5 ">{{ subjectUnit }}</div>
      <div class="ml-5">ชั้นปีที่ {{ subjectYear }}</div>
      <div class="ml-5 uppercase w-10 text-center">{{ subjectBranch }}</div>
      <div class="ml-5">จำนวนกลุ่มเรียน: {{ subjectGroup }}</div>
    </div>
    <div class="ml-auto mr-3">{{ isLabSubject ? "(ป.)" : "(ท.)" }}</div>
  </div>
</template>
<script>
export default {
    props: {
        subjectNum: {},
        subjectName: {},
        subjectCourseY: {},
        subjectInstructor: {},
        subjectUnit: {},
        subjectYear: {},
        subjectBranch: {},
        subjectGroup: {},
        isLabSubject: {},
    }
}
</script>
