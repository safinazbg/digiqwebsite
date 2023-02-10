<template>
  <section
      class="team section center-content"
      :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">


    <div class="container section-inner">

      <section-header :data="sectionHeader" class="center-content reveal-from-top" style="margin-bottom: 3rem"/>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Aarhus University</h3>
            <img src="../../assets/images/Aarhus_University_logo.svg.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="position: relative">
            <div
                style="position: absolute; top: 0; right: 0; border: 1px solid #00000088; padding: 2px 4px; font-size: smaller; border-radius: 4px">
              Coordinator,<br>
              WP1, WP5 Lead
            </div>
            <div style="display: flex;align-items: center">
              <div class="tiles-item">
                <div class="tiles-item-inner">
                  <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div class="team-item-image mb-24">
                      <c-image
                          :src="require('../../assets/images/JacobSherson.png')"
                          alt="Team member 01"
                          style="border-radius: 50%; height: 100px;"
                      />
                    </div>
                  </div>
                  <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                       data-reveal-delay="200">
                    <h5 class="team-item-name mt-0 mb-4">
                      Jacob Sherson
                    </h5>
                  </div>
                </div>
              </div>

              <div class="tiles-item">
                <div class="tiles-item-inner">
                  <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div class="team-item-image mb-24">
                      <c-image
                          :src="require('@/assets/images/simon.jpg')"
                          alt="Team member 01"
                          style="border-radius: 50%; height: 100px; width: 100px;"
                      />
                    </div>
                  </div>
                  <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                       data-reveal-delay="200">
                    <h5 class="team-item-name mt-0 mb-4">
                      Simon Richard Goorney
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">ICFO – The Institute of
              Photonic Sciences</h3>
            <img src="../../assets/images/ICFO-01.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/RobSewellStudio.jpeg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Robert Sewell
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">ICN2: Catalan Institute
              of Nanoscience and
              Nanotechnology</h3>
            <img src="../../assets/images/logo_ICN2.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/JoseH_ICN2.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Jose Hugo Garcia
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Czech Technical
              University of Prague</h3>
            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="position: relative">
            <div
                style="position: absolute; top: 0; right: 0; border: 1px solid #00000088; padding: 2px 4px; font-size: smaller; border-radius: 4px">
              WP2 Lead
            </div>
            <div style="display: flex;align-items: center">
              <div class="tiles-item">
                <div class="tiles-item-inner">
                  <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div class="team-item-image mb-24">
                      <c-image
                          :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                          alt="Team member 01"
                          style="border-radius: 50%; height: 100px; width: 100px;"
                      />
                    </div>
                  </div>
                  <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                       data-reveal-delay="200">
                    <h5 class="team-item-name mt-0 mb-4">
                      Aurel Gabris
                    </h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Copenhagen
              University</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/ku_co_uk_h.jpg" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Heidelberg
              University</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/hd_logo_standard_16cm_rgb.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="position: relative">
            <div
                style="position: absolute; top: 0; right: 0; border: 1px solid #00000088; padding: 2px 4px; font-size: smaller; border-radius: 4px">
              WP3 Lead
            </div>
            <div style="display: flex;align-items: center">
              <div class="tiles-item">
                <div class="tiles-item-inner">
                  <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div class="team-item-image mb-24">
                      <c-image
                          :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                          alt="Team member 01"
                          style="border-radius: 50%; height: 100px; width: 100px;"
                      />
                    </div>
                  </div>
                  <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                       data-reveal-delay="200">
                    <h5 class="team-item-name mt-0 mb-4">
                      Martin Gaerttner
                    </h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Science Melting Pot</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/SMP_transparent.png" height="200" width="150"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/Shaeema_SMP.jpeg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Shaeema Zaman
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">University of
              Paris-Saclay</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/UPS1.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Centrale Supelec</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/ecole-centrale-supelec-logo-0B3865DB96-seeklogo.com.png" height="200"
                 width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">

            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">École Normale
              Supérieure of Paris</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/logo_ENS_-_PSL.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/Tarik Yefsah.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Tarik Yefash
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">University of Barcelona</h3>
            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>
            <!--            <img src="../../assets/images/logo_ENS_-_PSL.png" height="200" width="200"/>-->
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">University of Pisa</h3>
            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>
            <!--            <img src="../../assets/images/logo_ENS_-_PSL.png" height="200" width="200"/>-->
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/IMG_5233.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Marilu Chiofalo
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">RWTH Aachen University</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/logo_rwth_rgb.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/20221129_DIGIQ_Final-09078.jpeg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Lisa Otten
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Ludwig Maximilian
              University of Munich</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/LMU_Logo_CMYK_FlaechigGruen.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="position: relative">
            <div style="position: absolute; top: 0; right: 0; border: 1px solid #00000088; padding: 2px 4px; font-size: smaller; border-radius: 4px">
              WP4 Lead
            </div>
            <div style="display: flex;align-items: center">
              <div class="tiles-item">
                <div class="tiles-item-inner">
                  <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div class="team-item-image mb-24">
                      <c-image
                          :src="require('../../assets/images/Kuhn.jpg')"
                          alt="Team member 01"
                          style="border-radius: 50%; height: 100px; width: 100px;"
                      />
                    </div>
                  </div>
                  <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                       data-reveal-delay="200">
                    <h5 class="team-item-name mt-0 mb-4">
                      Jochen Kuhn
                    </h5>
                  </div>
                </div>
              </div>

              <div class="tiles-item">
                <div class="tiles-item-inner">
                  <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                    <div class="team-item-image mb-24">
                      <c-image
                          :src="require('../../assets/images/Küchemann.jpg')"
                          alt="Team member 01"
                          style="border-radius: 50%; height: 100px; width: 100px;"
                      />
                    </div>
                  </div>
                  <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                       data-reveal-delay="200">
                    <h5 class="team-item-name mt-0 mb-4">
                      Stefan Kücheman
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">University of
              Strasbourg</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/Signature_Universite_Strasbourg_Unistra2_Transparent.png" height="200"
                 width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">University of Helsinki</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/UH_logo_black.png" height="150" width="150"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Autonomous
              University of
              Barcelona</h3>
            <!--            <img src="../../assets/images/UAB-" height="200" width="200"/>-->
            <img src="../../assets/images/UAB-Logo-centered.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/John_pict.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    John Calsamiglia Costa
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Technische Universität
              München</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/TUM.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/holleitner_small.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Alexander Holleitner
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Quarks Interactive</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/QI-full-dark.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">University of
              Technology of Troyes</h3>
            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>
            <!--            <img src="../../assets/images/QI-full-dark.png" height="200" width="200"/>-->
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Sorbonne University</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/LOGO_SU.jpg" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/Clement Sayrin.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Clement Sayrin
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Portuguese Quantum
              Institute</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/PQI.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/Joao Seixas.jpeg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Joao Seixas
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Deloitte Portugal</h3>
            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>
            <!--    <img src="../../assets/images/LOGO_SU.jpg" height="200" width="200"/>-->
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Instituto Superior
              Técnico</h3>
            <!--            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>-->
            <img src="../../assets/images/IST_A_RGB_POS.png" height="200" width="200"/>
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/Yasser Omar.jpg')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    Yasser Omar
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>

      <p style="border-bottom: 1px solid black">&nbsp;</p>

      <LPartnerSection>
        <template #organisation>

          <div>
            <h3 style="margin-top: 0">Technical University of
              Denmark</h3>
            <img src="../../assets/images/dq_icon1.png" height="200" width="200"/>
            <!--            <img src="../../assets/images/LOGO_SU.jpg" height="200" width="200"/>-->
          </div>

        </template>
        <template #people>

          <div style="display: flex;align-items: center">
            <div class="tiles-item">
              <div class="tiles-item-inner">
                <div class="team-item-header reveal-from-top" data-reveal-container=".tiles-item">
                  <div class="team-item-image mb-24">
                    <c-image
                        :src="require('../../assets/images/300px-Placeholder_no_text.svg.png')"
                        alt="Team member 01"
                        style="border-radius: 50%; height: 100px; width: 100px;"
                    />
                  </div>
                </div>
                <div class="team-item-content reveal-from-top" data-reveal-container=".tiles-item"
                     data-reveal-delay="200">
                  <h5 class="team-item-name mt-0 mb-4">
                    First Last
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </template>
      </LPartnerSection>


    </div>
  </section>
</template>

<script>
import {SectionTilesProps} from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'
import LPartnerSection from "@/components/layout/LPartnerSection.vue";
import SectionHeader from "@/components/sections/partials/SectionHeader.vue";

export default {
  name: 'CTeam',
  components: {
    CImage,
    SectionHeader,
    LPartnerSection,
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Partners',
        paragraph: ''
      }
    }
  }
}
</script>
<style>
.orgTitle {
  font-weight: bold;
  font-size: large;
}
</style>