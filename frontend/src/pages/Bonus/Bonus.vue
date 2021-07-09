<template>
  <div class="tables-basic">

    <b-row>
     <b-col lg="12">
       <Widget>
         <b-row>
           <b-col lg="3">
             <h3>Data <span class="fw-semi-bold">Bonus Member</span></h3>
             <br/>
           </b-col>
           <b-col lg="3">
              
           </b-col>
           <b-col lg="3">
              
           </b-col>
           <b-col lg="3">
             <b-row>
               <b-col lg="9">
                 <b-form-input placeholder="Search..." autofocus="true"></b-form-input>
               </b-col>
               <b-col lg="3">
                 <b-form-select v-model="selected" :options="options"></b-form-select>
               </b-col>
             </b-row>
           </b-col>
         </b-row>
    
         <div class="table-responsive">
           <table class="table table-hover">
             <thead>
               <tr>
                 <th>Register Date</th>
                 <th>Username</th>
                 <th>Saldo Bonus</th>
                 <th>Bonus Referral</th>
                 <th>Bonus Royalty</th>
                 <th>Bonus Top Sponsor</th>
                 <th>Bonus PNS</th>
                 <th>Bonus NSP</th>
                 <th>Total Bonus</th>
                 <th>Enable Bonus</th>
                 <th>Active Bonus Claimed</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>2021-07-06 02:10:42</td>
                 <td>nalpot</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0</td>
                 <td><b-button variant="success" href="">Yes</b-button></td>
                 <td><b-button variant="danger" href="">0.00000000</b-button></td>
               </tr>
               <tr>
                 <td>2021-07-06 02:10:42</td>
                 <td>nalpot</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0</td>
                 <td><b-button variant="success" href="">Yes</b-button></td>
                 <td><b-button variant="danger" href="">0.00000000</b-button></td>
               </tr>
               <tr>
                 <td>2021-07-06 02:10:42</td>
                 <td>nalpot</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0.00000000</td>
                 <td>0</td>
                 <td><b-button variant="success" href="">Yes</b-button></td>
                 <td><b-button variant="danger" href="">0.00000000</b-button></td>
               </tr>
             </tbody>
           </table>
         </div>
       </Widget>
     </b-col>
   </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Bonus',
  components: { Widget },
  data() {
    return {
      selected: '50',
        options: [
          { value: '10', text: '10' },
          { value: '25', text: '25' },
          { value: '50', text: '50' },
          { value: '100', text: '100' }
        ],
      tableStyles: [
        {
          id: 1,
          picture: require('../../assets/tables/1.jpg'), // eslint-disable-line global-require
          description: 'Palo Alto',
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2012'),
          size: '45.6 KB',
          progress: {
            percent: 29,
            colorClass: 'success',
          },
        },
        {
          id: 2,
          picture: require('../../assets/tables/2.jpg'), // eslint-disable-line global-require
          description: 'The Sky',
          info: {
            type: 'PSD',
            dimensions: '2400x1455',
          },
          date: new Date('November 14, 2012'),
          size: '15.3 MB',
          progress: {
            percent: 33,
            colorClass: 'warning',
          },
        },
        {
          id: 3,
          picture: require('../../assets/tables/3.jpg'), // eslint-disable-line global-require
          description: 'Down the road',
          label: {
            colorClass: 'danger',
            text: 'INFO!',
          },
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2012'),
          size: '49.0 KB',
          progress: {
            percent: 38,
            colorClass: 'inverse',
          },
        },
        {
          id: 4,
          picture: require('../../assets/tables/4.jpg'), // eslint-disable-line global-require
          description: 'The Edge',
          info: {
            type: 'PNG',
            dimensions: '210x160',
          },
          date: new Date('September 15, 2012'),
          size: '69.1 KB',
          progress: {
            percent: 17,
            colorClass: 'danger',
          },
        },
        {
          id: 5,
          picture: require('../../assets/tables/5.jpg'), // eslint-disable-line global-require
          description: 'Fortress',
          info: {
            type: 'JPEG',
            dimensions: '1452x1320',
          },
          date: new Date('October 1, 2012'),
          size: '2.3 MB',
          progress: {
            percent: 41,
            colorClass: 'primary',
          },
        },
      ],
      checkboxes1: [false, false, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };
  },
  methods: {
    parseDate(date) {
      const dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`;
    },
    checkAll(ev, checkbox) {
      const checkboxArr = (new Array(this[checkbox].length)).fill(ev.target.checked);
      Vue.set(this, checkbox, checkboxArr);
    },
    changeCheck(ev, checkbox, id) {
      this[checkbox][id] = ev.target.checked;
      if (!ev.target.checked) {
        this[checkbox][0] = false;
      }
    },
    getRandomData() {
      const result = [];

      for (let i = 0; i <= 8; i += 1) {
        result.push(Math.floor(Math.random() * 20) + 1);
      }

      return [{data: result}];
    },
    getRandomColor() {
      const {primary, success, info, danger} = this.appConfig.colors;
      const colors = [info, primary, danger, success];
      return {colors: [colors[Math.floor(Math.random() * colors.length)]]}
    }
  },
};
</script>

<style src="./Bonus.scss" lang="scss" scoped />
