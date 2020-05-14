import Vue from "vue";
import VueAxios from "vue-axios";
import http from "@/helpers/axios/modules/http";

Vue.use(VueAxios, http);

export default http;
