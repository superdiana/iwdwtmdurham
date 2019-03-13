<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-5" v-show="show">
        <v-layout wrap align-center justify-center row fill-height class="mt-5">
            <v-flex xs12 md6 lg6>
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#F9FBE7;color:#827717;font-size:200%">Registration</span>
                <p class="google-font mt-2" style="color:#37474F;font-size:150%">IWD'19 Ticket Registration</p>
                <p class="mt-0 google-font subheading">We will send you the confirmation mail by 25th August, 1st September and 8th September. If you can't make it, be sure to watch the livestream.</p>
                <p class="mt-0 google-font subheading">Sign in and register to reserve seats.</p>
                <p class="mt-0 google-font subheading">If you have questions or you’re not sure how to proceed, gdgjalandhar@gmail.com.</p>
            </v-flex>
        </v-layout>
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md6 lg6 class="pa-0">
               <v-stepper v-model="e6" vertical class="elevation-0 pa-0 ma-0">
                    <v-stepper-step :complete="e6 > 1" class="google-font" step="1">
                        <span style="font-size:150%">Sign in</span>
                        <small class="google-font" style="font-size:120%">You need to sign in with a Google account or a Gmail address to register for this event.</small>
                    </v-stepper-step>

                    <v-stepper-content step="1">
                        <v-card color="" class="mb-5 elevation-0">
                            <v-btn 
                            color="white"
                            v-on:click="GoogleLogin" 
                            style="text-transform: capitalize;border-radius:5px">
                                <v-icon left small>fab fa-google</v-icon>
                            Sign in with Google</v-btn>
                        </v-card>
                            <!-- <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                            <v-btn flat>Cancel</v-btn> -->
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 > 2" color="blue" step="2" style="font-size:150%">Your Details</v-stepper-step>

                    <v-stepper-content step="2">
                        <v-card color="" class="mb-2 elevation-0" ref="form" >
                            <v-layout row wrap align-center justify-center>
                                <v-flex xs12>
                                    <p class="google-font grey--text" style="font-size:120%">User is Loggged In with {{email}}</p>
                                    <p class="google-font" style="font-size:140%">IWD'19 Jalandhar</p>
                                    <p class="google-font" style="font-size:120%">Read Instructions completely:</p>
                                    <ul style="font-size:120%">
                                        <li class="google-font">We apologize that we can only invite limited members to the event, since we have limited resources for the event. So make sure you register as quickly as possible!</li>
                                        <li class="google-font">[Important] To give quality participation, we will filter/sort out the received entries based on the details you put in the registration form, so requesting you to pay attention and fill it out carefully!</li>
                                        <li class="google-font">[Important] We will confirm and start sending out final registration confirmation mail.</li>
                                    </ul>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center justify-center class="mt-4">
                                <v-flex xs12 md10>
                                    <v-radio-group v-model="radios" >
                                        <template v-slot:label>
                                            <div class="google-font" style="font-size:120%;color:black">Is this the first time you're attending IWD'19 Jalandhar?</div>
                                        </template>
                                        <v-radio value="Google">
                                            <template v-slot:label>
                                                <div>Yes</div>
                                            </template>
                                        </v-radio>
                                        <v-radio value="Duckduckgo">
                                            <template v-slot:label>
                                                <div>No</div>
                                            </template>
                                        </v-radio>
                                    </v-radio-group>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center row wrap class="mt-2">
                                <v-flex xs12 md10>
                                    <p class="google-font" style="font-size:120%;color:blue"><b>Basic Info</b></p>
                                </v-flex>
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Email"
                                        outline
                                        v-model="email"
                                        disabled
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Full Name"
                                        outline
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            
                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Company/Organization/College"
                                        outline
                                        :rules="[rules.required]"
                                        hint="In case of College kindly write Full Name of the College"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Job Title"
                                        outline
                                        :rules="[rules.required]"
                                        hint="In case of Student kindly write: Student"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Contact Number"
                                        outline
                                        mask="phone"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center row wrap class="mt-2">
                                <v-flex xs12 md10>
                                    <p class="google-font" style="font-size:120%;color:blue"><b>Social Info</b></p>
                                </v-flex>
                                 <v-flex xs12 md10>
                                    <v-text-field
                                        label="Do you have a LinkedIn profile? If so, please enter the URL."
                                        outline
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-flex>                                
                            </v-layout>

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Do you have a Stackoverflow profile? If so, please enter the URL.(Optional)"
                                        outline
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Do you have a GitHub repository? If so, please enter the URL. (Optional)"
                                        outline
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center row wrap class="mt-2">
                                <v-flex xs12 md10>
                                    <p class="google-font" style="font-size:120%;color:blue"><b>Some More Questions</b></p>
                                </v-flex>
                                <v-flex xs12 md10>
                                    <v-textarea
                                    outline
                                    :rules="[rules.required]"
                                    name="input-7-4"
                                    label="Share your work (applications/projects/website links)"
                                    hint="Share your applications/website/work portfolio with us, this would help us in knowing your experience and expertise. Use Comma for Multiple links."
                                    ></v-textarea>
                                    
                                </v-flex>
                            </v-layout>

                            

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-textarea
                                    outline
                                    :rules="[rules.required]"
                                    name="input-7-4"
                                    label="Why should we invite you to attend IWD'19 Jalandhar?"
                                    hint="Please be careful. We have limited seats! Show us why do you deserve a seat for the IWD'19 Jalandhar, how and why it's important for you to attend."
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="Your Current City"
                                        outline
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout align-start justify-center row wrap class="mt-2">
                                <v-flex xs12 md10>
                                    <v-text-field
                                        label="If you received a code, please enter it here (Optional)"
                                        outline
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 md10>
                                    <v-checkbox 
                                    v-model="checkbox"
                                    :rules="[rules.required]">
                                        <template v-slot:label>
                                            <div class="google-font">
                                            I acknowledge that GDG may use photographs and/or video taken of me at this event for any purpose without compensation to me.
                                            
                                            </div>
                                        </template>
                                    </v-checkbox>
                                </v-flex>
                                <v-flex xs12 md10>
                                    <v-checkbox 
                                    v-model="coc"
                                    :rules="[rules.required]">
                                        <template v-slot:label>
                                            <div class="google-font">
                                            I acknowledge that
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                <a
                                                    target="_blank"
                                                    href="https://docs.google.com/document/d/1Wz_w6Z7usMnXKFMpOY4IPbA35twK7Uc4CAxScGDiwOk/edit?usp=sharing"
                                                    @click.stop
                                                    v-on="on"
                                                >
                                                    GDG Jalandhar Code of Conduct.
                                                </a>
                                                </template>
                                                Opens in new window
                                            </v-tooltip>
                                            </div>
                                        </template>
                                    </v-checkbox>
                                </v-flex>
                            </v-layout>

                        </v-card>
                        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 > 3" color="blue" step="3">Select an ad format and name ad unit</v-stepper-step>

                    <v-stepper-content step="3">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step step="4" color="blue">View setup instructions</v-stepper-step>
                    <v-stepper-content step="4">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper>
           </v-flex>
        </v-layout>
    </v-container>
    </v-slide-y-reverse-transition>
</template>
<script>
import teamdata from '@/assets/data/speakers.json'
import firebase from "firebase"

export default {
    components:{
    },
    data() {
        return {
            show:false,
            dialog: false,
            speakersData: teamdata,
            e6: 1,
            radios:'',
            email:'',
            checkbox: false,
            coc:false,
            items: ['Student', 'Developer', 'Entrepreneur', 'Other'],
            rules: {
                email: v => (v || '').match(/@/) || 'Please enter a valid email',
                length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
                password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                'Password must contain an upper case letter, a numeric character, and a special character',
                required: v => !!v || 'This field is required'
            },
            FULL_NAME:'',
            ORGANIZATION:'',
            JOB_TITLE:'',
            MOBILE:'',
            LINKEDIN:'',
            STACKOVERFLOW:'',
            GITHUB:'',
            PROJECT:'',
            WHY:'',
            CITY:'',
            CODE:''
        }
    },
    mounted(){
        this.show = true
    },
    methods:{
       GoogleLogin(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
            }).catch(function(error) {
                console.log(error)
            });
       }


    },
    updated(){
        var self = this
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                self.email = user.email
                self.e6 = 2
            } else {
                self.e6 = 1
            }
        });
    },
    
}
</script>
