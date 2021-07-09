<template>
    <div class="tables-basic">

        <b-row>
            <b-col lg="12">
                <Widget>
                    <b-row>
                        <b-col lg="3">
                            <h3>Problem <span class="fw-semi-bold">Support</span></h3>
                            <br />
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
                                    <th>No</th>
                                    <th>From</th>
                                    <th>Subject</th>
                                    <th>Problem</th>
                                    <th>Date</th>
                                    <th>Language</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Troy2111</td>
                                    <td>Teknis</td>
                                    <td>iya kemarin ga sebesar itu.. td sdh saya kirim lagi.. dibantu proses kan ya
                                        Min.. terima kasih</td>
                                    <td>2021-07-06 14:24:30</td>
                                    <td>indonesian</td>
                                    <td>
                                        <b-button variant="danger" v-b-modal.modal-edit>
                                            <b-icon-pencil-square></b-icon-pencil-square> Answer
                                        </b-button>
                                    </td>
                                </tr>
                            </tbody>

                            <!-- Alert View -->
                            <b-modal id="modal-edit" centered size="lg" title="Answer Problem Member">
                                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                    <b-form-group id="fullname" label="Problem:" label-for="fullname">
                                        <b-form-input id="fullname" v-model="form.name" type="text">
                                        </b-form-input>
                                    </b-form-group>
                                    <!-- Batas Input -->
                                    <b-form-group id="numberphone" label="Answer:" label-for="numberphone">
                                        <ckeditor id="numberphone" v-model="form.phone" type="text" rows="8">
                                        </ckeditor>
                                    </b-form-group>

                                </b-form>
                            </b-modal>

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
        name: 'Support',
        components: {
            Widget
        },
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
                form: {
                    name: '',
                    phone: '',
                    email: ''
                },
                form2: {
                    password: '',
                    retry: ''
                },
                show: true,
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
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                this.form.name = ''
                this.form.phone = ''
                this.form.email = ''
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },
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
            // Banned Button
            alertBan() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You will has been ban this member!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtomColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, ban it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$swal(
                            'Banned!',
                            'You managed to ban this member.',
                            'success'
                        )
                    }
                });
            },
            // Auto Sign In Button
            alertAutoSignIn() {
                let timerInterval
                this.$swal({
                    title: 'Auto Sign In!',
                    html: 'You will enter this member in <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        this.$swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = this.$swal.getHtmlContainer()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = this.$swal.getTimerLeft()
                                }
                            }
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === this.$swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
        },
    };
</script>

<style src="./Support.scss" lang="scss" scoped />

//Parse Data Belum selesai