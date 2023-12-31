import { Build } from './build'
import { Totem } from './totem'

const resources = {
  linkToGoogle: 'https://google.com',
  exampleImage: 'images/SGH_grafika_1.png',
  floor1: 'images/floor/1.jpg',
  floor2: 'images/floor/2.jpg',
  floor3: 'images/floor/3.jpg',
  floor4: 'images/floor/4.jpg',
  floor5: 'images/floor/5.jpg',
  floor6: 'images/floor/6.jpg',
  floor7: 'images/floor/7.jpg',
  floor8: 'images/floor/8.jpg',
  floor9: 'images/floor/9.jpg',
  '1': 'images/1.png',
  '2': 'images/2.png',
  '3': 'images/3.png',
  '4': 'images/4.png',
  '5-1': 'https://www.sgh.waw.pl/knop/en',
  '6': 'images/6.png',
  '7': 'images/7.png',
  '8': 'images/8.png',
  '9': 'images/9.png',
  '10': 'images/10.png',
  '10-1': 'https://ksiegarnia.pwn.pl/Modern-leisure-society-consumer-behavior,931161169,p.html',
  '11': 'images/11.png',
  '12': 'images/12.png',
  '13': 'images/13.png',
  '14-1': 'https://www.sgh.waw.pl/knop/en/institute-value-management',
  '15': 'images/15.png',
  '16': 'images/16.png',
  '17': 'images/17.png',
  '17-1': 'https://www.sgh.waw.pl/knop/konferencje-i-seminaria-instytutu-zarzadzania-wartoscia '
}

const scene = new Entity()
scene.addComponent(new Transform({
  position: new Vector3(96, 0, 64)
}))
engine.addEntity(scene)

const build = new Build()
build.setParent(scene)

/*----------------------TOTEMY DACH--------------------------*/
const totem_chmura = new Totem('models/totemy-dach/totem_chmura.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 2, 0)
    }
  },
  image: {
    path: resources.floor4
  }
})
totem_chmura.addComponent(new Transform({
  position: new Vector3(-21.014, 21.817, -12.697)
}))
totem_chmura.setParent(build)

const totem_kartagraficzna = new Totem('models/totemy-dach/totem_kartagraficzna.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources.floor7
  }
})
totem_kartagraficzna.addComponent(new Transform({
  position: new Vector3(-51.737, 21.817, -20.971)
}))
totem_kartagraficzna.setParent(build)

const totem_macintosh = new Totem('models/totemy-dach/totem_macintosh.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 1.9, 0)
    }
  },
  image: {
    path: resources.floor2
  }
})
totem_macintosh.addComponent(new Transform({
  position: new Vector3(-12.809, 21.817, -42.898)
}))
totem_macintosh.setParent(build)

const totem_meta = new Totem('models/totemy-dach/totem_meta.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources.floor9
  }
})
totem_meta.addComponent(new Transform({
  position: new Vector3(-43.17, 21.817, -51.825)
}))
totem_meta.setParent(build)

const totem_minecraft = new Totem('models/totemy-dach/totem_minecraft.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 2.25, 0)
    }
  },
  image: {
    path: resources.floor6
  }
})
totem_minecraft.addComponent(new Transform({
  position: new Vector3(-43.111, 21.817, -12.498)
}))
totem_minecraft.setParent(build)

const totem_pizza = new Totem('models/totemy-dach/totem_pizza.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 2, 0)
    }
  },
  image: {
    path: resources.floor5
  }
})
totem_pizza.addComponent(new Transform({
  position: new Vector3(-32.064, 21.817, -12.568)
}))
totem_pizza.setParent(build)

const totem_sfera = new Totem('models/totemy-dach/totem_sfera.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 2.25, 0)
    }
  },
  image: {
    path: resources.floor1
  }
})
totem_sfera.addComponent(new Transform({
  position: new Vector3(-21.059, 21.817, -51.678)
}))
totem_sfera.setParent(build)

const totem_shiba = new Totem('models/totemy-dach/totem_shiba.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 2.5, 0)
    }
  },
  image: {
    path: resources.floor8
  }
})
totem_shiba.addComponent(new Transform({
  position: new Vector3(-51.802, 21.817, -43.007)
}))
totem_shiba.setParent(build)

const totem_www = new Totem('models/totemy-dach/totem_www.glb', {
  particles: {
    model: 'models/particles_dach.glb',
    position: {
      position: new Vector3(0, 2.5, 0)
    }
  },
  image: {
    path: resources.floor3
  }
})
totem_www.addComponent(new Transform({
  position: new Vector3(-12.524, 21.817, -20.977)
}))
totem_www.setParent(build)
/*----------------------TOTEMY DACH--------------------------*/

/*----------------------TOTEMY PARTER--------------------------*/
const totem_wejscie1 = new Totem('models/totemy-dach/totem_sfera.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 2.25, 0)
    }
  },
  image: {
    path: resources['1'],
    sw: 4271,
    sh: 4271
  }
})
totem_wejscie1.addComponent(new Transform({
  position: new Vector3(-54, 1, -27.5)
}))
totem_wejscie1.setParent(build)

const totem_wejscie2 = new Totem('models/totemy-dach/totem_sfera.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 2.25, 0)
    }
  },
  image: {
    path: resources['2'],
    sw: 1654,
    sh: 1654
  }
})
totem_wejscie2.addComponent(new Transform({
  position: new Vector3(-54, 1, -36.5)
}))
totem_wejscie2.setParent(build)

const totem_kula = new Totem('models/totemy-parter/totem_kula.glb', {
  particles: {
    model: 'models/particles_kula_centralna.glb',
    position: {
      position: new Vector3(0, 3.5, 0)
    }
  },
  link: resources['17-1'],
  image: {
    path: resources['17']
  }
})
totem_kula.addComponent(new Transform({
  position: new Vector3(-21.1407, 0, -31.926)
}))
totem_kula.setParent(build)

const totem_blockchain1 = new Totem('models/totemy-parter/totem_blockchain.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.6, 0)
    }
  },
  image: {
    path: resources['15']
  }
})
totem_blockchain1.addComponent(new Transform({
  position: new Vector3(-49.604, 1.90034, -14.3937)
}))
totem_blockchain1.setParent(build)

const totem_blockchain2 = new Totem('models/totemy-parter/totem_blockchain.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.6, 0)
    }
  },
  image: {
    path: resources['16']
  }
})
totem_blockchain2.addComponent(new Transform({
  position: new Vector3(-49.604, 1.90034, -18.7819)
}))
totem_blockchain2.setParent(build)

const totem_blockchain3 = new Totem('models/totemy-parter/totem_blockchain.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.6, 0)
    }
  },
  link: resources['14-1']
})
totem_blockchain3.addComponent(new Transform({
  position: new Vector3(-45.2007, 1.90034, -14.3937)
}))
totem_blockchain3.setParent(build)

const totem_inne1 = new Totem('models/totemy-parter/totem_inne.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['12']
  }
})
totem_inne1.addComponent(new Transform({
  position: new Vector3(-14.4668, 1.45938, -14.3337)
}))
totem_inne1.setParent(build)

const totem_inne2 = new Totem('models/totemy-parter/totem_inne.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['11']
  }
})
totem_inne2.addComponent(new Transform({
  position: new Vector3(-14.4668, 1.45938, -18.7463)
}))
totem_inne2.setParent(build)

const totem_inne3 = new Totem('models/totemy-parter/totem_inne.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['13']
  }
})
totem_inne3.addComponent(new Transform({
  position: new Vector3(-18.8524, 1.45938, -14.3337)
}))
totem_inne3.setParent(build)

const totem_inne4 = new Totem('models/totemy-parter/totem_inne.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  link: resources['10-1'],
  image: {
    path: resources['10']
  }
})
totem_inne4.addComponent(new Transform({
  position: new Vector3(-14.4668, 1.45938, -23.1425)
}))
totem_inne4.setParent(build)

const totem_prawo1 = new Totem('models/totemy-parter/totem_prawo.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['7']
  }
})
totem_prawo1.addComponent(new Transform({
  position: new Vector3(-14.4693, 1.44924, -49.6006)
}))
totem_prawo1.setParent(build)

const totem_prawo2 = new Totem('models/totemy-parter/totem_prawo.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['8']
  }
})
totem_prawo2.addComponent(new Transform({
  position: new Vector3(-14.4693, 1.44924, -45.0837)
}))
totem_prawo2.setParent(build)

const totem_prawo3 = new Totem('models/totemy-parter/totem_prawo.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['6']
  }
})
totem_prawo3.addComponent(new Transform({
  position: new Vector3(-18.59, 1.44924, -49.6006)
}))
totem_prawo3.setParent(build)

const totem_prawo4 = new Totem('models/totemy-parter/totem_prawo.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['9']
  }
})
totem_prawo4.addComponent(new Transform({
  position: new Vector3(-14.4693, 1.44924, -40.6695)
}))
totem_prawo4.setParent(build)

const totem_technologia1 = new Totem('models/totemy-parter/totem_technologia.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: {
    path: resources['4']
  }
})
totem_technologia1.addComponent(new Transform({
  position: new Vector3(-49.5803, 1.603, -49.5911)
}))
totem_technologia1.setParent(build)

const totem_technologia2 = new Totem('models/totemy-parter/totem_technologia.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  image: { path: resources['3'] }
})
totem_technologia2.addComponent(new Transform({
  position: new Vector3(-49.5803, 1.603, -45.1144)
}))
totem_technologia2.setParent(build)

const totem_technologia3 = new Totem('models/totemy-parter/totem_technologia.glb', {
  particles: {
    model: 'models/particles_totemy.glb',
    position: {
      position: new Vector3(0, 1.5, 0)
    }
  },
  link: resources['5-1']
})
totem_technologia3.addComponent(new Transform({
  position: new Vector3(-45.0331, 1.603, -49.5911)
}))
totem_technologia3.setParent(build)
/*----------------------TOTEMY PARTER--------------------------*/

