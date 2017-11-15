var app = new Vue({
  el: "#controller",
  data: {
    pid: {
      "pid_running": true,
      "pv": 100.2,
      "sv": 157
    }
  },

  methods: {
    setTempBars() {
      document.querySelector('#pvBar').addEventListener('mdl-componentupgraded', function () {
        this.MaterialProgress.setProgress(app.pid.pv / 2);
      });
      document.querySelector('#svBar').addEventListener('mdl-componentupgraded', function () {
        this.MaterialProgress.setProgress(app.pid.sv / 2);
      });
      return true;
    },

    updateTempBars() {
      document.querySelector('#pvBar').MaterialProgress.setProgress(this.pid.pv / 2);
      document.querySelector('#svBar').MaterialProgress.setProgress(this.pid.sv / 2);
    }
  },

  mounted() {
    this.setTempBars();
  },

  watch: {
    pid: {
      handler() {
        this.updateTempBars();
      },
      deep: true
    }
  }
})
