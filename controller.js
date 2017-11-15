document.querySelector('#pvBar').addEventListener('mdl-componentupgraded', function () {
  this.MaterialProgress.setProgress(50);
});
document.querySelector('#svBar').addEventListener('mdl-componentupgraded', function () {
  this.MaterialProgress.setProgress(76);
});
