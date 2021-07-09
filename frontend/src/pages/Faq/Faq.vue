<template>
    <section>
        <h3 class="page-title">
            <b-button variant="info" @click="alertDelete">
                <b-icon-pencil></b-icon-pencil> Add New
            </b-button>
        </h3>

        <div class="tables-basic">
            <b-row>
                <b-col lg="12">
                    <Widget>
                        <b-row>
                            <b-col lg="3">
                                <h3>List <span class="fw-semi-bold">FAQ</span></h3>
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
                                        <th>Subject</th>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="row in dataFaq" :key="row.id">
                                        <td>{{row.id}}</td>
                                        <td>{{row.subject}}</td>
                                        <td>{{row.question}}</td>
                                        <td>{{row.answer}}</td>
                                        <td>
                                            <b-button variant="warning" v-b-modal.modal-edit>
                                                <b-icon-pencil-square></b-icon-pencil-square>
                                            </b-button>
                                            &nbsp;
                                            <b-button variant="danger" @click="alertDelete">
                                                <b-icon-trash></b-icon-trash>
                                            </b-button>
                                        </td>
                                    </tr>
                                </tbody>

                                <!-- Alert View -->
                                <b-modal id="modal-edit" centered size="lg" title="Edit Frequently Asked Questions">
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
    </section>
</template>

<script>
    import Vue from 'vue';
    import Widget from '@/components/Widget/Widget';

    export default {
        name: 'Faq',
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
                
                // Looping Faq Data
                dataFaq: [{
                        id: 1,
                        question: 'Palo Alto',
                        answer: 'iyap'
                    },
                    {
                        id: 2,
                        question: 'Palo Alto',
                        answer: 'iyap'
                    },
                    {
                        id: 3,
                        question: 'Palo Alto',
                        answer: 'iyap'
                    },
                ],

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
            alertDelete() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You will delete this frequently asked questions!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtomColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, deleted it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$swal(
                            'Deleted!',
                            'You have deleted frequently asked questions.',
                            'success'
                        )
                    }
                });
            },
        },
    };
</script>

<style src="./Faq.scss" lang="scss" scoped />