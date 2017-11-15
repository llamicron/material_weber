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
        this.MaterialProgress.setProgress(app.pid.pv / 2.12);
        if (app.pid.pid_running) {
          this.MaterialProgress.setBuffer(87);
        }
      });
      document.querySelector('#svBar').addEventListener('mdl-componentupgraded', function () {
        this.MaterialProgress.setProgress(app.pid.sv / 2.12);
      });
      return true;
    },

    updateTempBars() {
      document.querySelector('#pvBar').MaterialProgress.setProgress(this.pid.pv / 2.12);
      document.querySelector('#svBar').MaterialProgress.setProgress(this.pid.sv / 2.12);
      if (this.pid.pid_running) {
        document.querySelector('#pvBar').MaterialProgress.setBuffer(87);
      } else {
        document.querySelector('#pvBar').MaterialProgress.setBuffer(100);
      }
      return true;
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
