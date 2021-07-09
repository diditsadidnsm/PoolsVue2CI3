<template>
    <section>

        <div class="tables-basic">
            <b-row>
                <b-col lg="12">
                    <Widget>
                        <center>
                            <TreeChart :json="treeData" />
                        </center>
                    </Widget>
                    
                </b-col>
            </b-row>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Widget from '@/components/Widget/Widget';
    import TreeChart from "vue-binary-tree";

    export default {
        name: 'Network',
        components: {
            Widget, TreeChart
        },
        data() {
            return {
                treeData: {
    name: 'root',
    image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png",
    children: [
      {
        name: 'children1',
        image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png"
      },
      {
        name: 'children2',
        image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png",
        mate: {
          name: 'mate',
          image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png"
        },
        children: [
          {
            name: 'grandchild',
            image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png"
          },
          {
            name: 'grandchild2',
            image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png"
          },
          {
            name: 'grandchild3',
            image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png"
          }
        ]
      },
      {
        name: 'children3',
        image_url: "http://yorkdeca.com//wp-content//uploads//bfi_thumb//icon-man-n97y8p47fnwb1s9on4boeg779n09o19qz5gp1zsgaw-n97y9i97bj071p3cwyx41quhol0nanhff5oqxkl8y0.png"
      }
    ]
  },
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

<style src="./Network.scss" lang="scss" scoped />