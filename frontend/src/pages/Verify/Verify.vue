<template>
    <section>
        <b-tabs>
            <b-tab title="Pending" active>
                <div class="tables-basic">
                    <b-row>
                        <b-col lg="12">
                            <Widget>
                                <b-row>
                                    <b-col lg="3">
                                        <h3>Data <span class="fw-semi-bold">Member Pending</span></h3>
                                        <br />
                                    </b-col>
                                    <b-col lg="3">

                                    </b-col>
                                    <b-col lg="3">

                                    </b-col>
                                    <b-col lg="3">
                                        <b-row>
                                            <b-col lg="9">
                                                <b-form-input placeholder="Search..." autofocus="true">
                                                </b-form-input>
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
                                                <th>Foto KTP</th>
                                                <th>Foto Selfie</th>
                                                <th>NIK KTP</th>
                                                <th>Full Name</th>
                                                <th>Username</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                     <img class="img-rounded" src="../../assets/tables/1.jpg" alt="" height="50" />
                                                </td>
                                                <td>
                                                    <img class="img-rounded" src="../../assets/tables/1.jpg" alt="" height="50" />  
                                                </td>
                                                <td>3374021406800004</td>
                                                <td>Thio Fredy Setiawan</td>
                                                <td>Troy2111</td>
                                                <td><b-badge variant="warning" pill>Pending</b-badge></td>
                                                <td>
                                                    <b-form-select v-model="select" :options="action"></b-form-select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Widget>
                        </b-col>
                    </b-row>
                </div>
            </b-tab>
            <b-tab title="Approved">
                <div class="tables-basic">

                    <b-row>
                        <b-col lg="12">
                            <Widget>
                                <b-row>
                                    <b-col lg="3">
                                        <h3>Data <span class="fw-semi-bold">Member Approved</span></h3>
                                        <br />
                                    </b-col>
                                    <b-col lg="3">

                                    </b-col>
                                    <b-col lg="3">

                                    </b-col>
                                    <b-col lg="3">
                                        <b-row>
                                            <b-col lg="9">
                                                <b-form-input placeholder="Search Member..." autofocus="true">
                                                </b-form-input>
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
                                                <th>Foto KTP</th>
                                                <th>Foto Selfie</th>
                                                <th>NIK KTP</th>
                                                <th>Full Name</th>
                                                <th>Username</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                     <img class="img-rounded" src="../../assets/tables/1.jpg" alt="" height="50" />
                                                </td>
                                                <td>
                                                    <img class="img-rounded" src="../../assets/tables/1.jpg" alt="" height="50" />  
                                                </td>
                                                <td>3374021406800004</td>
                                                <td>Thio Fredy Setiawan</td>
                                                <td>Troy2111</td>
                                                <td><b-badge variant="success" pill>Approved</b-badge></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Widget>
                        </b-col>
                    </b-row>
                </div>
            </b-tab>
            <b-tab title="Rejected">
                <div class="tables-basic">

                    <b-row>
                        <b-col lg="12">
                            <Widget>
                                <b-row>
                                    <b-col lg="3">
                                        <h3>Data <span class="fw-semi-bold">Member Rejected</span></h3>
                                        <br />
                                    </b-col>
                                    <b-col lg="3">

                                    </b-col>
                                    <b-col lg="3">

                                    </b-col>
                                    <b-col lg="3">
                                        <b-row>
                                            <b-col lg="9">
                                                <b-form-input placeholder="Search Member..." autofocus="true">
                                                </b-form-input>
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
                                                <th>Foto KTP</th>
                                                <th>Foto Selfie</th>
                                                <th>NIK KTP</th>
                                                <th>Full Name</th>
                                                <th>Username</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                     <img class="img-rounded" src="../../assets/tables/1.jpg" alt="" height="50" />
                                                </td>
                                                <td>
                                                    <img class="img-rounded" src="../../assets/tables/1.jpg" alt="" height="50" />  
                                                </td>
                                                <td>3374021406800004</td>
                                                <td>Thio Fredy Setiawan</td>
                                                <td>Troy2111</td>
                                                <td><b-badge variant="danger" pill>Reject</b-badge></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Widget>
                        </b-col>
                    </b-row>
                </div>
            </b-tab>
        </b-tabs>
    </section>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Verify',
        components: {},
        data() {
            return {
                selected: '50',
                options: [{
                        value: '10',
                        text: '10'
                    },
                    {
                        value: '25',
                        text: '25'
                    },
                    {
                        value: '50',
                        text: '50'
                    },
                    {
                        value: '100',
                        text: '100'
                    }
                ],
                select: null,
                action: [{
                        value: null,
                        text: 'Action'
                    },
                    {
                        value: 'Approve',
                        text: 'Approve'
                    },
                    {
                        value: 'Reject',
                        text: 'Reject'
                    }
                ],
                tableStyles: [{
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

                return [{
                    data: result
                }];
            },
            getRandomColor() {
                const {
                    primary,
                    success,
                    info,
                    danger
                } = this.appConfig.colors;
                const colors = [info, primary, danger, success];
                return {
                    colors: [colors[Math.floor(Math.random() * colors.length)]]
                }
            }
        },
    };
</script>

<style src="./Verify.scss" lang="scss" scoped />