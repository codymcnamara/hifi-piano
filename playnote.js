(function() {
  var pianoSound = SoundCache.getSound("https://s3.amazonaws.com/hifi-public/sounds/doorbell.wav");

  this.clickDownOnEntity = function(entityID, mouseEvent) {
    this.entityId = entityId;
    if (mouseEvent.isLeftButton) {
      this.ding();
    }
  }

  this.ding = function(){
    var position = Entities.getEntityProperties(this.entityId).position
    if (pianoSound && pianoSound.downloaded) {
      Audio.playSound(pianoSound, {
        position: position
      });
    } else {
      print("COULD NOT PLAY SOUND!");
    }
  }
})
