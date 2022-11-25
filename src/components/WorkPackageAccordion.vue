<template>
  <div class="workPackageAccordion">
    <LAccordionItem
        :isOpen="selected === 0"
        @toggle="(openIt) => onToggleItem(0, openIt)"
    >
      <template #title>
        Work Package 1: A modular design of the curriculum
      </template>
      <template #body>
        In WP1 an ecosystem of short (5-25 hour), didactically innovative, digital learning modules will be developed
        T(1.1).This collection of modules will constitute the backbone of the DQ-ecosystem to be used in courses and
        network activities within DigiQ. The educational material for each module will be fully documented, translated
        to three languages and made available on the Digital Skills Platform ready for use by the remaining part of the
        ecosystem. The promotion of these didactically innovative materials will be closely coordinated with the current
        quantum education CSA, QTEdu, and its successor in order to ensure that it efficiently reaches the growing
        community of +300 European quantum educators. As illustrated in Fig. XX below, it will be a fundamental
        principle that all DQ-modules are thoroughly matched to the Quantum Competence Framework in order to ensure
        interoperability and seamless integration into existing and newly developed course material. In addition, the
        consortium will contribute to the ecosystem a collection of training modules, designed for use in both digital
        (T1.2) and in-person formats (1.3).
      </template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 1"
        @toggle="(openIt) => onToggleItem(1, openIt)"
    >
      <template #title>
        Work Package 2: Innovative course design
      </template>
      <template #body>
        In WP2 the DQ-courses will be developed and provided to the consortium students. Courses will be developed in
        three different formats: augmented (T2.1), online (T2.2) and in innovative experimental formats (T2.3). The
        augmented courses can either be an existing course upgraded by the systematic integration of one or more
        DQ-modules or systematically and comprehensively upgraded through the collaboration with a professional
        educational developer (at least 50 hours of development assistance).
      </template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 2"
        @toggle="(openIt) => onToggleItem(2, openIt)"
    >
      <template #title>
        Work Package 3: DQ-Networks, An European web of QT training
      </template>
      <template #body>
        In WP3, DQ-networks will be established and operated, which will form the central human element of the DigiQ
        program (T3.1). Each partner will take part in at least one network with several networks running concurrently
        and in synergy with each other to provide structured and individually tailored training for every DigiQ student.
        These networks will be modelled after the successful EFEQT pilot (https://efeqt.eu) concept (which currently
        hosts 35 students from 6 HEI institutions across Europe), each with a unique flavor depending on the core
        expertise of the partners and participating students. DQ-networks will engage the students in their own
        professional development through greater exposure to other students, international research groups and
        companies. They will provide a comprehensive training programme consisting of virtual and in person events,
        meetups with QT experts, and industry visits, covering the full breadth of QT today with an emphasis on
        practical and soft-skills. Each network will comprise of (i) a dedicated webpage showcasing the program and
        providing visibility for DigiQ students, (ii) a digital communication platform to ensure a high level of
        interactivity between students and teacher-researchers, (iii) monthly meetups for developing special skills
        taking full advantage of the DQ-modules and transversal skills trainings,for participating organisations and
        students, and (iv) online and in-person events program (at least twice per year) which will allow every DigiQ
        student to develop team projects, gain key skills in emerging QT areas and transversal skills (e.g., RRI, DEI,
        science communication) and to build their own trans-European professional networks.
      </template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 3"
        @toggle="(openIt) => onToggleItem(3, openIt)"
    >
      <template #title>
        Work Package 4: DQ-Mobility Schemes
      </template>
      <template #body>
        In WP4, higher education partners will establish and operate the DQ-Exchange program (T4.1). This program will
        build on existing partnerships such as those established in the EFEQT and QTOM pilots and numerous ERASMUS+
        agreements to facilitate exchange semesters in which students may access the didactic innovations of the
        DQ-courses developed and provided in T2.1 and T2.3. In addition, the DQ-Exchange program will allow students
        access to thesis projects from partner universities, widening access to research themes from across the QCF. In
        T4.2, the DQ-Internship program will be established and operated. Internships will run year-round and will be
        based at nodes in the research and industry centres of the Munich Quantum Valley (TUM, LMU), the Catalonia
        Quantum Community (ICFO, UB, ICN2), the Cluster of Excellence Matter and Light for Quantum Computing (Aachen)
        and the Dutch Quantum Delta (AUAS). This opportunity provides students insights into possible career paths and
        allows them to form valuable connections to quantum industries. In addition, formal and informal partnerships
        established in the networks will be leveraged to provide additional internship opportunities for students of the
        consortium partners.
      </template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 4"
        @toggle="(openIt) => onToggleItem(4, openIt)"
    >
      <template #title>
        Work Package 5: DQ-Ecosystem
      </template>
      <template #body>
        In WP5 the consortium will establish a shared infrastructure for the implementation of the DQ-Master program
        across all partner formats. The DQ-Track Learning Management System (LMS) (T5.1) will be the core means of
        maintaining alignment between the educational programs offered at the partners and tracking student
        participation in the DQ-Master. All higher education partners will contribute to this as local representatives
        of the DigiQ project at their institutions. In T5.2 the ecosystem of available modules (WP1), courses (WP2),
        networks (WP3), and mobility schemes (WP4) will be evaluated for educational quality assurance and reviews
        conducted throughout the duration of the project. In T5.3, the project will be administered and communicated to
        ensure smooth running of the activities of the consortium, including financial management and development and
        operation of the program website.
      </template>
    </LAccordionItem>
  </div>
</template>

<script>
import LAccordionItem from "@/components/layout/LAccordionItem";
import {ref} from 'vue'

export default {
  name: "WorkPackageAccordion",
  components: {
    LAccordionItem,
  },
  props: {
    select: {type: Number, default: -1},
  },
  setup(props) {
    const selected = ref(props.select)
    const onToggleItem = (index, openIt) => openIt ? selected.value = index : -1
    return {
      onToggleItem,
      selected,
    }
  }
}
</script>

<style scoped>

</style>
