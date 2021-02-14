<template>
  <form-wizard @on-complete="onComplete" 
                shape="tab"
                color="#32a887">
  <!-- PERSONAL INFORMATION STEP  -->
  <tab-content 
    title="Personal Information"
    icon="ti-user">   
    <personal-information></personal-information>
  </tab-content>

  <!-- RELATIONSHIP STATUS -->
  <tab-content 
  title="Relationship Status"
  icon="ti-heart">
    <relationship-status></relationship-status>            
  </tab-content>
      
  <!-- RESIDENTIAL DETAILS -->
  <tab-content title="Residential Details"
    icon="ti-home">
    <residential-details></residential-details>
  </tab-content>
      
  <!-- CHECKING DETAILS -->
  <tab-content title="Checkings"
    icon="ti-money">
  <checking-details></checking-details>
  </tab-content>

  <!-- SAVING DETAILS -->
  <tab-content title="Savings"
    icon="ti-shield">
    <savings-details></savings-details>
  </tab-content>

  <!-- RETIREMENT DETAILS -->
  <tab-content title="Retirement"
    icon="ti-support">
    <retirement-details></retirement-details>
  </tab-content>
  </form-wizard>  
</template>

<script>
import CheckingDetails from '../components/onboarding/steps/CheckingDetails'
import PersonalInformation from '../components/onboarding/steps/PersonalInformation.vue'
import RelationshipStatus from '../components/onboarding/steps/RelationshipStatus.vue'
import ResidentialDetails from '../components/onboarding/steps/ResidentialDetails.vue'
import RetirementDetails from '../components/onboarding/steps/RetirementDetails.vue'
import SavingsDetails from '../components/onboarding/steps/SavingsDetails.vue'

export default {
  components: { 
    PersonalInformation,
    RelationshipStatus,
    ResidentialDetails,
    CheckingDetails,
    SavingsDetails,
    RetirementDetails 
    }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

input[type=text], 
input[type=date],
input[type=radio],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
};
</style>