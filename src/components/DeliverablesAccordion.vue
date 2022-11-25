<template>
  <div class="deliverableAccordion">
    <LAccordionItem
        :isOpen="selected === 0"
        @toggle="(openIt) => onToggleItem(0, openIt)"
    >
      <template #title>
        Enhancing the quality of Quantum Technology in higher education
      </template>
      <template #body>
        The DigiQ ecosystem will provide extensive innovative resources in the form of the modular building
        blocks of curricula and partner organisations will receive comprehensive support in implementing these
        in their active curriculum. The DQ-modules themselves will be impactful in utilising state-of-the-art
        digital technology to systematically upgrade and complement traditional teaching styles, using all of
        the expertise of the consortium partners and covering the breadth of the Quantum Competence Framework.
        By being fully documented, translated into three EU languages, and made available online for all,
        these
        modules will serve as a top quality standalone resource for educators even outside of the consortium,
        and may be invaluable in industry training initiatives such as future short-cycle programs. Modules
        will
        be built with a strong input from researchers not only in QT, but also in chemistry, mathematics,
        computer science, business, education and thus will not only target students of these fields, but also
        improve collaboration between researchers and teachers in different disciplines and accelerating the
        development of new collaborative interdisciplinary research projects.
        <br>
        <br>
        The development of DQ-courses leveraging these innovative modules will result in university curricula
        with significant improvements in the competences available to their graduates, as students will have
        access to the expertise of the partners in studying diverse areas of QT that would not otherwise be
        available to them, as well as having curated study programs which support their development aligned to
        the needs of their future employment in industry, research, or elsewhere. These courses and modules
        will
        allow for the setup of entirely new Quantum Technology degree programs, of particularly great benefit
        to
        the Czech Republic and Portugal, widening countries (Horizon Europe) that stand to gain from
        multiplicative benefits to their local ecosystems as a result of the project. In both of these cases,
        partners will develop the first Quantum Technology Master degrees of their kind, which may never have
        been possible without the financial and structural support of the project.
      </template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 1"
        @toggle="(openIt) => onToggleItem(1, openIt)"
    >
      <template #title>
        Feeding the QT Workforce pipeline
      </template>
      <template #body>
        DigiQ will give a unique opportunity for students to become part of the vivid and rich community being
        built in the field of Quantum Technology at the European level.The DQ-Networks serve as a feeding
        valve for this community, resulting in an annual production of at least 150 trained students ready to
        support research and innovation in the digital decade. They also represent the first steps towards the
        dissemination of quantum awareness more widely among the greater European population, and the DigiQ
        students (trained in outreach and DEI) will become the flag bearers for QT.
        <br>
        <br>
        Graduates completing the DQ-Master will be placed in the ranks of other leading European universities
        for starting their careers either in academia or industry. The integration of the study programmes
        into the leading research and industries of the European Quantum Technology ecosystem, combined with
        the international recognition of the DQ-Master will enhance the reputation of all study programs in
        which it is offered, increasing the attractiveness of QT Master degrees to students and thus
        supporting the QT workforce in recruiting more students on the path to becoming industry experts, as
        well as supporting the universities themselves in building their capacity to offer the training that
        is in such demand.
        <br>
        <br>
        In particular, students from under-represented and disadvantaged backgrounds, such as women and those
        from countries with lower access to digital skills, will benefit enormously from the consortium
        training, network activities, and reserved priority access to 20% of the total budget for financial
        support. The mobility and network activities in particular will offer these students unparalleled
        opportunities for integration within the top research community in Quantum Technology in Europe.
      </template>
    </LAccordionItem>
    <LAccordionItem
        :isOpen="selected === 2"
        @toggle="(openIt) => onToggleItem(2, openIt)"
    >
      <template #title>
        Further impact on Industry including SMEs
      </template>
      <template #body>
        In addition to providing a significant contribution to the future QT-workforce, DigiQ provides
        numerous opportunities for the involvement of local industry affiliates, giving them first hand access
        to shape the quality and direction of Quantum Technology education and thus aligning the QT Master
        programs to industry needs. Through the networks and mobility schemes, the local industry will be fed
        with a steady flow of highly trained quantum technologists with a uniquely European mindset into the
        workforce.
        <br>
        <br>
        The DigiQ emphasis on mapping all activities to the Competence Framework and the emerging Job
        qualification profiles will provide invaluable assistance to companies as they plan their recruitment
        and job training efforts of the future. In addition, the program will be responsible for providing
        training of all levels of detail thanks to a diverse ecosystem of DQ-Courses and DQ-Modules, and the
        systematic inclusion of soft and enabling skills will ensure that candidates will match industry
        needs. In particular, the training program will not risk providing only highly technologically
        oriented staff that are mostly relevant for large companies with extensive R&D divisions, but will
        also provide candidates with the broad range of skills and training suitable for the diverse
        requirements in many SMEs. In addition, the informal partnerships with numerous industrial SMEs formed
        through the DQ-Networks between students, universities, and companies will bring together these
        stakeholders in empowering the DigiQ graduates to join in the industry themselves.
        <br>
        <br>
        Finally, in
        accordance with the Flagship educational vision, we believe that the provision of open source,
        innovative hands-on modules will kickstart an emerging industry sector for corporate training in which
        start-ups and SMEs can specialize in providing customized learning and training experiences for larger
        companies. Our selection of partner-SMEs and informal affiliates will provide both support for them to
        become prominent actors in this new sector as well as become light-house examples for other SMEs to
        follow.
      </template>
    </LAccordionItem>
  </div>
</template>

<script>
import LAccordionItem from "@/components/layout/LAccordionItem";
import {ref} from 'vue'

export default {
  name: "DeliverablesAccordion",
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
