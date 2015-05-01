(function() {
  print("hello");
  var pianoSound = SoundCache.getSound("https://raw.githubusercontent.com/codymcnamara/hifi-piano/master/notes/CDP_60.wav");

  this.mousePressOnEntity = function(entityId, mouseEvent) {
    print("clicked")
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
