<template>
    <section>
        <center>
            <h3 class="page-title"><span class="fw-semi-bold">3394.33355055</span></h3>
            <h4 class="page-title">USDT</h4>
            <b-button variant="danger">
                <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="1"></b-icon>
            </b-button>
        </center>
        <br />
        <b-tabs>
            <b-tab title="Withdrawal Pools Pending" active>
                <div class="tables-basic">
                    <b-row>
                        <b-col lg="12">
                            <Widget>
                                <b-row>
                                    <b-col lg="4">
                                        <h3>Data Withdrawal <span class="fw-semi-bold">Pools Pending</span></h3>
                                        <br />
                                    </b-col>
                                    <b-col lg="4">

                                    </b-col>
                                    <b-col lg="4">
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
                                                <th>Date</th>
                                                <th>Username</th>
                                                <th>Send to</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2021-07-06 15:35:18</td>
                                                <td>toks01</td>
                                                <td>TNgADFBiUPy8M6ru4EK9TrR3Gbf5LVK24S</td>
                                                <td>100.00000000</td>
                                                <td>
                                                    <b-badge variant="warning" pill>Pending</b-badge>
                                                </td>
                                                <td>
                                                    <b-button variant="success" @click="alertApproved">
                                                        <b-icon-check-circle></b-icon-check-circle> Approved
                                                    </b-button>
                                                    &nbsp;
                                                    <b-button variant="danger" @click="alertRejected">
                                                        <b-icon-x-circle></b-icon-x-circle> Rejected
                                                    </b-button>
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
            <b-tab title="Withdrawal Pools History">
                <div class="tables-basic">
                    <b-row>
                        <b-col lg="12">
                            <Widget>
                                <b-row>
                                    <b-col lg="4">
                                        <h3>Data Withdrawal <span class="fw-semi-bold">Pools History</span></h3>
                                        <br />
                                    </b-col>
                                    <b-col lg="4">

                                    </b-col>
                                    <b-col lg="4">
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
                                                <th>Date</th>
                                                <th>Username</th>
                                                <th>Send to</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2021-07-06 15:35:18</td>
                                                <td>toks01</td>
                                                <td>TNgADFBiUPy8M6ru4EK9TrR3Gbf5LVK24S</td>
                                                <td>100.00000000</td>
                                                <td>
                                                    <b-badge variant="success" pill>Approved</b-badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2021-07-06 15:35:18</td>
                                                <td>toks01</td>
                                                <td>TNgADFBiUPy8M6ru4EK9TrR3Gbf5LVK24S</td>
                                                <td>100.00000000</td>
                                                <td>
                                                    <b-badge variant="danger" pill>Rejected</b-badge>
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
            <b-tab title="Withdrawal History Binance">
                <div class="tables-basic">

                    <b-row>
                        <b-col lg="12">
                            <Widget>
                                <b-row>
                                    <b-col lg="4">
                                        <h3>Data Withdrawal <span class="fw-semi-bold">History Binance</span></h3>
                                        <br />
                                    </b-col>
                                    <b-col lg="4">

                                    </b-col>
                                    <b-col lg="4">
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
                                                <th>Date</th>
                                                <th>TRX ID</th>
                                                <th>Send to Address</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>June 29th 2021, 8:46:24</td>
                                                <td>Internal transfer 67532583528</td>
                                                <td>TBKSaWkJ7SCGRranfY8bnrCthEn3bWbwSp</td>
                                                <td>1</td>
                                                <td>6</td>
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
        name: 'Withdrawal',
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
            },

            // Approved Button
            alertApproved() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You will to approve this withdrawal",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtomColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, approved it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$swal(
                            'Approved!',
                            'You finished to approve this withdrawal.',
                            'success'
                        )
                    }
                });
            },

            // Rejected Button
            alertRejected() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You will to reject this withdrawal",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtomColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, rejected it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$swal(
                            'Rejected!',
                            'You finished to reject this withdrawal.',
                            'success'
                        )
                    }
                });
            },
        },
    };
</script>

<style src="./Withdrawal.scss" lang="scss" scoped />