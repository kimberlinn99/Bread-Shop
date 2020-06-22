<template>
  <div>
    <home-section-a></home-section-a>
    <home-section-b></home-section-b>
    <home-break-section></home-break-section>
    <home-section-c></home-section-c>
    <home-section-d></home-section-d>
  </div>
</template>

<script>
  import HomeSectionA from '@/components/Home-Page/Home-SectionA'
  import HomeSectionB from '@/components/Home-Page/Home-SectionB'
  import HomeSectionC from '@/components/Home-Page/Home-SectionC'
  import HomeSectionD from '@/components/Home-Page/Home-SectionD'
  import HomeBreakSection from '@/components/Home-Page/Home-breakSection'

  export default {
    name: 'Home',
    components: {
      HomeSectionA,
      HomeSectionB,
      HomeSectionC,
      HomeSectionD,
      HomeBreakSection
    }
  }
</script>
