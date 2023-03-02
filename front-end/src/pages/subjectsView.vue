<template>
  <section class="my-10 min-h-screen">
    <SubjectCard
      v-for="subject in subjects"
      :allSubjects="subjects"
      :key="subject.subjectNum"
      :subject="subject"
    />
  </section>
</template>

<script>
import subjects from "@/components/SubjectCard/subjects.json";

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
      subjects,
    };
  },
};
</script>
