const Discord = require("discord.js");

module.exports.run= async (bot, message, args) => {
  const answers = [
      'https://image.ibb.co/hzHgmJ/C3_DF9_B30_A5_C2_4_A92_B596_73_BD63_A4_FF20.jpg',
      'https://orig00.deviantart.net/d909/f/2012/335/e/3/naked_mole_rat_finished_by_cartoonsbykristopher-d5mqmkv.png',
      'https://orig00.deviantart.net/cdb4/f/2011/284/8/d/kay_the_naked_mole_rat_by_darkheartedpyro-d4cjwr5.jpg',
      'https://pre00.deviantart.net/85f7/th/pre/i/2012/188/3/c/rufus_the_super_mole_rat_by_zimonini-d56dapb.jpg',
      'https://orig00.deviantart.net/ceac/f/2015/101/9/1/unusual_anthro__naked_mole_rat_swimsuit_model_by_kiki_doodle-d8pblnf.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWRdUt1sUnAxokHzNziUh-O2sofvVOoGzS4fHo0eGoqD7zuI0yw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKoY-5-1_Dm6T8447KVJcZNnqV4nfAXAyeERx9sixebbJ6MXACw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7s6lANDu-sGkg_1vujVSEyJSgtzWs0vV3h3QNJgs0mwAh3ffr',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTm4QyElHC5rmu_l1iOlHw5U4S4eEGMmgP8TVwV2Bdofhzlng',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMWA-KVuR9jWcWwxoP23fIJzDgslZYOEPtKpTuN9ah5k-jaivvg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJQ8PZhoZMmt7ZoVPLRkZLTI8_yDKymiGGi9CXp0EtBzXyUJ9',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBn5wlPMHAS_JtWWzlARYjyd9ogwrRfYTG_ZJ9Sv9u3fzdgFoyA',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3USQPgTblUNlPgGeFPKpnO43jk1BwEMQznrL1kxFWPXM7S18V',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMPwdtToOG-fqXhPdUeLLwDWNq8mUZkqhnXRwkC7gE2WlWdaBVg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksgqdT-H203k2r_r2othvVGzNT2yji2bDc_iyHwZxXF1l5TE7',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwhVtybp0AQ7zj86wHUBVMSVyY0KNPTYF10xbZ9Jryc9ASLEONw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Z9Ar9B-hmfaME5wYV180gYFUbwOGlBLYMJUlnxl3asJAH1il',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVFycO3P3XuWg9fBhzyRjAa89tbFstHCfCdPHe0WDcHRqW1En',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfqUtoarS1Ao7a169fP-b2oOU4Uh5LXr7DjUB73d_3fTUZ_UW',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPTUe1lyfllwtLDHbKrc5GUdp8cdXKrQaZY1snFqnAn9L_orgOQ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFF9JP8vEgAoVmKWoCdzHqXMow8czLrx5iR_K2Z6OUOEqzbyw9w',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMZ9qaIhZ4wCdWb9SBE0OpT5tyQqjtG0n7AMP3nAhG53pzCFd',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDmEvVvdyZ8FwCb1hsnkmLeJ9uPVtv2Q5qIZqVPuEynBrHYKE',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8wB8rUuS9DbvtMAeoFBLB5zsASJaEXul96xRaRDzZvCPPi-U',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUN-OUvvh6gjFb8ZKEr7lk9n17w51hY7VGdbxTnXSymUgzCuyBg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2q8bFZFoW6yjRGXDy8DRpy15ZOU6LZ32XJ3bjVe38UgaWlgjWRQ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaBj_FXi9YDYd7XlSbE0i2BpAiOKlwUFyzGoUavd4V_ZEsvFEXg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxqNxdaX591JHZIjl56rvjam0Poh6IDksYQy6O_8A49fKyUVd',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlta-B_7Fy0CHOgjz6xk6lu0VTevlLO8aJAuC4CSEoY2fC83VBAQ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSum1_ohI_V_XxsASxaxXU57240gmi0dzAnCHgzmxBjH-UL1Ah56Q',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVo_U3xbwQjPj6Y8MDLddAWA4T8qWLx4iFNyrG1BG4Ugp-sxph',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoD1mKdQXoomXntpB71T6-z_X6eDmLCfzBeVv-7Tv--d0j_1b',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqRLAsCOymxVQarvrIPGmIQRnUAAnCgunt0N0xfzKfjaNtDv1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2-CXpNY9bw3qRYpiZJ6NSuEKil4RhKhAGMgQxPWq8F4JqACQSQ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfGruhgChqq3opHKodchg7X5oHRxCCgddq8nXYloqz570ce9V0',
      'http://bioimages.vanderbilt.edu/lq/baskauf/whetgla30670.jpg',
      'http://bioimages.vanderbilt.edu/gq/baskauf/ghetgla30673.jpg',
      'http://bioimages.vanderbilt.edu/lq/baskauf/whetglajuvenile43838.jpg',
      'https://53744bf91d44b81762e0-fbbc959d4e21c00b07dbe9c75f9c0b63.ssl.cf3.rackcdn.com/media/C8/C8054A00-1A80-4795-872A-0C06DFA0A793/Presentation.Large/Naked-mole-rat-queen-and-workers-sleeping.jpg',
      'https://53744bf91d44b81762e0-fbbc959d4e21c00b07dbe9c75f9c0b63.ssl.cf3.rackcdn.com/media/66/665E0818-7BC6-472A-BD2F-B8F194ACDB37/Presentation.Large/Portrait-of-naked-mole-rat.jpg',
      'https://53744bf91d44b81762e0-fbbc959d4e21c00b07dbe9c75f9c0b63.ssl.cf3.rackcdn.com/media/D5/D5064782-0BE4-4C36-99C5-FCB82B106577/Presentation.Large/Naked-mole-rat-workers-from-different-colonies-in-conflict.jpg',
      'https://53744bf91d44b81762e0-fbbc959d4e21c00b07dbe9c75f9c0b63.ssl.cf3.rackcdn.com/media/2D/2D5D530F-07C1-4A80-AB3A-07AF9BF8FE86/Presentation.Large/Naked-mole-rat-submissive-posture.jpg'
  ];

  const nmrembed = new Discord.RichEmbed()
.setColor('#45a17e')
.setAuthor(`Mole Rat`)
.setDescription('**Naked Mole Rat**')
.setImage(`${answers[~~(Math.random() * answers.length)]}`);
  message.channel.send({nmrembed})
}

module.exports.help = {
  name: "nmr"
}
