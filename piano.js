// create keys

var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));

var properties = {
  type: "Box",
  position: position,
  color: { red: 0, green: 220, blue: 0 }
};

Ent = Entities.addEntity(properties);
var props = Entities.getEntityProperties(Ent);
print("heres the entitiy:" + JSON.stringify(props));

print("Entity added");
print(JSON.stringify(Entities.identifyEntity(Ent)));

Script.setTimeout(function(){
  print("heres the entitiy after timeout:" + JSON.stringify(props))
}, 1000);

var pianoSound = SoundCache.getSound("https://s3.amazonaws.com/hifi-public/sounds/doorbell.wav");

Ent.mousePressOnEntity = function(entityId, mouseEvent) {
  print("clicked");
  Ent.entityId = entityId;
  if (mouseEvent.isLeftButton) {
    Ent.ding();
  }
}

Ent.ding = function(){
  var position = Entities.getEntityProperties(Ent.entityId).position
  if (pianoSound && pianoSound.downloaded) {
    Audio.playSound(pianoSound, {
      position: position
    });
  } else {
    print("COULD NOT PLAY SOUND!");
  }
}




function cleanup(){
  Ent.deleteEntity();
}

Script.scriptEnding.connect(cleanup)
