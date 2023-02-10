<template>
  <fragment>
    <c-generic-section>
      <div class="container-xs">
        <h2 class="mt-0">Project Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <figure>
          <c-image
              class="image-larger"
              :src="require('@/assets/images/image-placeholder.png')"
              alt="Image placeholder"
              :width="712"
              :height="400" />
          <figcaption class="text-color-low">Project photo</figcaption>
        </figure>
        <h2>Goals and Objectives</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Develop a Pan-European Quantum Technology Master, offering high quality education online and in-person.</li>
          <li>Comprehensively align the education efforts with Industry Needs, training students to form the backbone of the future quantum-aware workforce.</li>
          <li>Pave the way for Pan-European scaleup of efforts by formalising the efforts of the Quantum Technology Education community.</li>
          <li>Promoting wide access to skills in Quantum Technology with an inclusive program design.</li>
        </ul>
      </div>
    </c-generic-section>

    <c-generic-section>
      <div class="container-xs" style="margin-top: -3rem">
        <c-section-header :data="genericSection04Header" style="padding-left: 20px" />

        <c-accordion>
          <c-accordion-item title="Work Package 1: A modular design of the curriculum" active>
            In WP1 an ecosystem of short (5-25 hour), didactically innovative, digital learning modules will be developed T(1.1).This collection of modules will constitute the backbone of the DQ-ecosystem to be used in courses and network activities within DigiQ. The educational material for each module will be fully documented, translated to three languages and made available on the Digital Skills Platform ready for use by the remaining part of the ecosystem.
            <br style="margin-bottom: 1rem">
            The promotion of these didactically innovative materials will be closely coordinated with the current quantum education CSA, QTEdu, and its successor in order to ensure that it efficiently reaches the growing community of +300 European quantum educators.
            <br style="margin-bottom: 1rem">
            As illustrated in Fig. XX below, it will be a fundamental principle that all DQ-modules are thoroughly matched to the Quantum Competence Framework in order to ensure interoperability and seamless integration into existing and newly developed course material. In addition, the consortium will contribute to the ecosystem a collection of training modules, designed for use in both digital (T1.2) and in-person formats (1.3).
          </c-accordion-item>
          <c-accordion-item title="Work Package 2: Innovative course design">
            In WP2 the DQ-courses will be developed and provided to the consortium students. Courses will be developed in three different formats: augmented (T2.1), online (T2.2) and in innovative experimental formats (T2.3). The augmented courses can either be an existing course upgraded by the systematic integration of one or more DQ-modules or systematically and comprehensively upgraded through the collaboration with a professional educational developer (at least 50 hours of development assistance).
          </c-accordion-item>
          <c-accordion-item title="Work Package 3: DQ-Networks, An European web of QT training">
            In WP3, DQ-networks will be established and operated, which will form the central human element of the DigiQ program (T3.1). Each partner will take part in at least one network with several networks running concurrently and in synergy with each other to provide structured and individually tailored training for every DigiQ student.
            <br style="margin-bottom: 1rem">
            These networks will be modelled after the successful EFEQT pilot (https://efeqt.eu) concept (which currently hosts 35 students from 6 HEI institutions across Europe), each with a unique flavor depending on the core expertise of the partners and participating students. DQ-networks will engage the students in their own professional development through greater exposure to other students, international research groups and companies. They will provide a comprehensive training programme consisting of virtual and in person events, meetups with QT experts, and industry visits, covering the full breadth of QT today with an emphasis on practical and soft-skills.
            <br style="margin-bottom: 1rem">
            Each network will comprise of (i) a dedicated webpage showcasing the program and providing visibility for DigiQ students, (ii) a digital communication platform to ensure a high level of interactivity between students and teacher-researchers, (iii) monthly meetups for developing special skills taking full advantage of the DQ-modules and transversal skills trainings,for participating organisations and students, and (iv) online and in-person events program (at least twice per year) which will allow every DigiQ student to develop team projects, gain key skills in emerging QT areas and transversal skills (e.g., RRI, DEI, science communication) and to build their own trans-European professional networks.           </c-accordion-item>
          <c-accordion-item title=" Work Package 4: DQ-Mobility Schemes ">
            In WP4, higher education partners will establish and operate the DQ-Exchange program (T4.1). This program will build on existing partnerships such as those established in the EFEQT and QTOM pilots and numerous ERASMUS+ agreements to facilitate exchange semesters in which students may access the didactic innovations of the DQ-courses developed and provided in T2.1 and T2.3.
            <br style="margin-bottom: 1rem">
            In addition, the DQ-Exchange program will allow students access to thesis projects from partner universities, widening access to research themes from across the QCF. In T4.2, the DQ-Internship program will be established and operated. Internships will run year-round and will be based at nodes in the research and industry centres of the Munich Quantum Valley (TUM, LMU), the Catalonia Quantum Community (ICFO, UB, ICN2), the Cluster of Excellence Matter and Light for Quantum Computing (Aachen) and the Dutch Quantum Delta (AUAS). This opportunity provides students insights into possible career paths and allows them to form valuable connections to quantum industries. In addition, formal and informal partnerships established in the networks will be leveraged to provide additional internship opportunities for students of the consortium partners.           </c-accordion-item>
          <c-accordion-item title=" Work Package 5: DQ-Ecosystem ">
            In WP5 the consortium will establish a shared infrastructure for the implementation of the DQ-Master program across all partner formats. The DQ-Track Learning Management System (LMS) (T5.1) will be the core means of maintaining alignment between the educational programs offered at the partners and tracking student participation in the DQ-Master.
            <br style="margin-bottom: 1rem">
            All higher education partners will contribute to this as local representatives of the DigiQ project at their institutions. In T5.2 the ecosystem of available modules (WP1), courses (WP2), networks (WP3), and mobility schemes (WP4) will be evaluated for educational quality assurance and reviews conducted throughout the duration of the project. In T5.3, the project will be administered and communicated to ensure smooth running of the activities of the consortium, including financial management and development and operation of the program website.           </c-accordion-item>
        </c-accordion>
      </div>
    </c-generic-section>

    <c-generic-section>
      <div class="container-xs" style="margin-top: -1rem">
        <c-section-header :data="genericSection03Header" class="center-content" />
        <p style="margin-top: -1rem">The project has assembled a broad consortium of partners in order to develop and implement QT-master solutions for universities at all levels of QT-readiness ranging from setup of new formal QT-masters, to extensively upgrading existing QT-masters degrees and developing customised solutions for students at universities in which administrative, financial, or other barriers exist for the full implementation of QT-masters degrees.
          <br style="margin-bottom: 1rem">
          DigiQ also spearheads the innovative, interdisciplinary solutions necessary to engage all relevant disciplines in the training of the QT-workforce. Below, we provide further details on the three impacts in key areas. </p>
        <c-accordion>
          <c-accordion-item title=" Enhancing the quality of Quantum Technology in higher education">
            The DigiQ ecosystem will provide extensive innovative resources in the form of the modular building blocks of curricula and partner organisations will receive comprehensive support in implementing these in their active curriculum. The DQ-modules themselves will be impactful in utilising state-of-the-art digital technology to systematically upgrade and complement traditional teaching styles, using all of the expertise of the consortium partners and covering the breadth of the Quantum Competence Framework. By being fully documented, translated into three EU languages, and made available online for all, these modules will serve as a top quality standalone resource for educators even outside of the consortium, and may be invaluable in industry training initiatives such as future short-cycle programs. Modules will be built with a strong input from researchers not only in QT, but also in chemistry, mathematics, computer science, business, education and thus will not only target students of these fields, but also improve collaboration between researchers and teachers in different disciplines and accelerating the development of new collaborative interdisciplinary research projects.
            <br style="margin-bottom: 1rem">
            The development of DQ-courses leveraging these innovative modules will result in university curricula with significant improvements in the competences available to their graduates, as students will have access to the expertise of the partners in studying diverse areas of QT that would not otherwise be available to them, as well as having curated study programs which support their development aligned to the needs of their future employment in industry, research, or elsewhere. These courses and modules will allow for the setup of entirely new Quantum Technology degree programs, of particularly great benefit to the Czech Republic and Portugal, widening countries (Horizon Europe) that stand to gain from multiplicative benefits to their local ecosystems as a result of the project. In both of these cases, partners will develop the first Quantum Technology Master degrees of their kind, which may never have been possible without the financial and structural support of the project.
          </c-accordion-item>
          <c-accordion-item title=" Feeding the QT Workforce pipeline">
            DigiQ will give a unique opportunity for students to become part of the vivid and rich community being built in the field of Quantum Technology at the European level.The DQ-Networks serve as a feeding valve for this community, resulting in an annual production of at least 150 trained students ready to support research and innovation in the digital decade. They also represent the first steps towards the dissemination of quantum awareness more widely among the greater European population, and the DigiQ students (trained in outreach and DEI) will become the flag bearers for QT.
            <br style="margin-bottom: 1rem">
            Graduates completing the DQ-Master will be placed in the ranks of other leading European universities for starting their careers either in academia or industry. The integration of the study programmes into the leading research and industries of the European Quantum Technology ecosystem, combined with the international recognition of the DQ-Master will enhance the reputation of all study programs in which it is offered, increasing the attractiveness of QT Master degrees to students and thus supporting the QT workforce in recruiting more students on the path to becoming industry experts, as well as supporting the universities themselves in building their capacity to offer the training that is in such demand.
            <br style="margin-bottom: 1rem">
            In particular, students from under-represented and disadvantaged backgrounds, such as women and those from countries with lower access to digital skills, will benefit enormously from the consortium training, network activities, and reserved priority access to 20% of the total budget for financial support. The mobility and network activities in particular will offer these students unparalleled opportunities for integration within the top research community in Quantum Technology in Europe.
          </c-accordion-item>
          <c-accordion-item title=" Further impact on Industry including SMEs ">
            In addition to providing a significant contribution to the future QT-workforce, DigiQ provides numerous opportunities for the involvement of local industry affiliates, giving them first hand access to shape the quality and direction of Quantum Technology education and thus aligning the QT Master programs to industry needs. Through the networks and mobility schemes, the local industry will be fed with a steady flow of highly trained quantum technologists with a uniquely European mindset into the workforce.
            <br style="margin-bottom: 1rem">
            The DigiQ emphasis on mapping all activities to the Competence Framework and the emerging Job qualification profiles will provide invaluable assistance to companies as they plan their recruitment and job training efforts of the future. In addition, the program will be responsible for providing training of all levels of detail thanks to a diverse ecosystem of DQ-Courses and DQ-Modules, and the systematic inclusion of soft and enabling skills will ensure that candidates will match industry needs. In particular, the training program will not risk providing only highly technologically oriented staff that are mostly relevant for large companies with extensive R&D divisions, but will also provide candidates with the broad range of skills and training suitable for the diverse requirements in many SMEs. In addition, the informal partnerships with numerous industrial SMEs formed through the DQ-Networks between students, universities, and companies will bring together these stakeholders in empowering the DigiQ graduates to join in the industry themselves.
            <br style="margin-bottom: 1rem">
            Finally, in accordance with the Flagship educational vision, we believe that the provision of open source, innovative hands-on modules will kickstart an emerging industry sector for corporate training in which start-ups and SMEs can specialize in providing customized learning and training experiences for larger companies. Our selection of partner-SMEs and informal affiliates will provide both support for them to become prominent actors in this new sector as well as become light-house examples for other SMEs to follow.
          </c-accordion-item>
           </c-accordion>
      </div>
    </c-generic-section>


  </fragment>
</template>

<script>
import CLayout from '@/layouts/LayoutAlternative.vue'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CGenericSection from '@/components/sections/GenericSection.vue'
import CImage from '@/components/elements/Image.vue'
import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'

export default {
  name: 'Project',
  components: {
    CSectionHeader,
    CGenericSection,
    CImage,
    CAccordion,
    CAccordionItem
  },
  data() {
    return {
      genericSection01Header: {
        title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection02Header: {
        title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection03Header: {
        title: ' Deliverables and Expected Impact '
      },
      genericSection04Header: {
        title: 'Work Packages'
      },
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
