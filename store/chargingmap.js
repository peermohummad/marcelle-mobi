export const state = () => ({
  filterVisible: true,
  chargings: []
});

export const getters = {};
export const mutations = {
  SET_CHARGINGS(state, chargings) {
    state.chargings = chargings;
  }
};

export const actions = {
  async fetchCharging({ commit }) {
    const chargings = await this.$axios.$get(
      "https://api.openchargemap.io/v3/poi/?output=json&countrycode=FR&latitude=43.295336&longitude=5.373907&distanceunit=KM&verbose=false&compact=true"
    );

    commit("SET_CHARGINGS", chargings);
  }
};