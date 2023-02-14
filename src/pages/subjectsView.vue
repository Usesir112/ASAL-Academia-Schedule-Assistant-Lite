<template>
  <section class="h-screen my-10">
    <SubjectCard
    v-for="subject in subjects"
    :key="subject.subjectNum"
    :subjectNum="subject.subjectNum"
        :subjectName="subject.subjectName"
        :subjectCourseY="subject.subjectCourseY"
        :subjectInstructor="subject.subjectInstructor"
        :subjectUnit="subject.subjectUnit"
        :subjectYear="subject.subjectYear"
        :subjectBranch="subject.subjectBranch"
        :subjectGroup="subject.subjectTheoryGroupNum"
        :isLabSubject="subject.isLabSubject"/>
  </section>
</template>

<script>
import  subjects  from "@/components/SubjectCard/subjects.json"

definePageMeta({
  title: "Subjects",
  titleThai: "วิชา",
  descriptionThai: "จัดการ สร้าง แก้ไข และลบวิชาของคุณได้ที่นี่",
  color: "dsba",
  colorText: "text-dsba",
});

export default {
  data() {
    return {
      subjects
    }
  }
}
</script>
