<template>
    <v-app >
        <v-container fluid>
            <!-- breadcrumbs -->
            <v-breadcrumbs :items="breadcrumbItems" class="dark--text">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
            </v-breadcrumbs>
            <!-- breadcrumbs End-->

            <!-- Cards -->
            <v-row dense>
                 <v-col cols="sm12 md6 lg4 xl4">
                    <v-card>
                        <div class="d-flex flex-no-wrap justify-space-between my-5px">
                            <div>
                                <v-card-title class="headline"></v-card-title>
                                <v-card-subtitle>User</v-card-subtitle>
                                <v-card-text>
                                <h3 class="text--primary">150</h3> 
                                </v-card-text>
                                <v-card-actions>
                                    <router-link :to="{ name: 'Profile' }" style="text-decoration: none; color: inherit;">
                                    <v-btn class="mt-5" outlined rounded small>Details </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </div>
                            <v-avatar class="ma-3" size="125" tile>
                                <v-icon size="100" class="grey--text" left>mdi-account-tie</v-icon>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <!-- Cards Ends-->
            <br>
        </v-container>
    </v-app>
</template>

<script>
// components
import Spinner from '@/components/Spinner.vue'

export default {
    components: { Spinner },
    data () {
        return {
            breadcrumbItems: [
                {
                    text: 'Dashboard',
                    disabled: true,
                },
            ],
        }
    },
     mounted() {
        document.title = 'Techminate | Dashboard'
    },

    methods:{
        //
    }
}
</script>