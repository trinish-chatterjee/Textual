$(document).ready(function(){
	load_data();


	adjust_commentary_box();
	$(window).scroll(function(){
		adjust_commentary_box();
	});
	$(window).on("resize", function(){
		adjust_commentary_box();
	})
});

function split_data( data ){
	var splits = data.split("\n");
	var return_string = "";
	for(let i = 0;i<splits.length;i++){
		return_string += '<p class="body_text_class">' + splits[i] + '</p>';
	}
	return return_string;
}

function load_data(){
	var text_body = $('#text_body');
	$.each(data, function(key, value){
		if(key == 'LeBonheurMaupassant'){
			$.each(value.data, function(k, v){
				var create_string = '<div class="text_block">' 
				create_string += split_data(v.text);
				create_string +=  '</div>';
				console.log(create_string);
				var new_element = $(create_string);
				new_element.click(function(){
					var num = $('.text_block').index($(this));
					var translation_text = data.LeBonheurMaupassant.data[num].translation;
					$('#commentary').html(split_data(translation_text));
					$('.text_block').removeClass('selected');
					$(this).addClass('selected');
				});
				text_body.append(new_element);
			});
		}
	});
}

function adjust_commentary_box(){
	var commentary_box = $('#commentary');
	var placeholder = $('#placeholder');
	var offset = placeholder.offset().top - 10;
	var page = $('body').scrollTop();
	if(page > offset){
		commentary_box.addClass('fixed_commentary');
		placeholder.addClass('fixed_body_text');
	} else{
		commentary_box.removeClass('fixed_commentary');
		placeholder.removeClass('fixed_body_text');
	}
}

var data = {
  "LeBonheurMaupassant":{
    "title": "Le Bonheur",
    "author": "Guy de Maupassant",
    "data": [
    {"text": "C'était l'heure du thé, avant l'entrée des lampes. La villa dominait la mer; le soleil disparu avait laissé le ciel tout rose de son passage, frotté de poudre d'or; et la Méditerranée, sans une ride, sans un frisson, lisse, luisante encore sous le jour mourant, semblait une plaque de métal polie et démesurée.\nAu loin, sur la droite, les montagnes dentelées dessinaient leur profil noir sur la pourpre pâlie du couchant.\nOn parlait de l'amour, on discutait ce vieux sujet, on redisait des choses qu'on avait dites, déjà, bien souvent. La mélancolie douce du crépuscule ralentissait les paroles, faisait flotter un attendrissement dans les âmes, et ce mot: \"amour\", qui revenait sans cesse, tantôt prononcé par une forte voix d'homme, tantôt dit par une voix de femme au timbre léger, paraissait emplir le petit salon, y voltiger comme un oiseau, y planer comme un esprit.",
      "translation":"It was the hour of tea, before the entry of the lamps. The villa looked over the sea; the disappeared sun had left the sky all pink with its passage, rubbed with gold dust; and the Mediterranean, without a wrinkle, smooth, shimmer still under the dying day, seemed to be an immense and polished slab of metal.\nIn the distance, on the right, the saw-toothed mountains drew their black profile on the faded burgundy of the setting sun.\nPeople were talking about love, people discussed this old subject, people said again things that had been already, quite often, said. The soft melancholy of the dusk slowed down speech, and caused a tenderness to flutter in souls, and this word: “love”, which came back again ceaselessly, something pronounced by the loud voice of a man, sometimes by the voice of a women with a soft tone, seemed to fill the little lounge room, fly about like a bird, linger around like a spirit. ",
      "commentary": "In these first few paragraphs, Maupassant sets up a beautiful scene of a party in a villa overlooking the Mediterranean at sunset. You can almost feel the nostalgia in the subject matter, described with a <i>champ lexical</i> that includes words such as “attendrissement”, “voltiger”, “douce”, and “planer”.\nA few things to note here: in this story, Maupassant uses the word “on” to describe what “one” did at the party, which doesn’t translate easily into English. It gives a kind of impersonal vibe to the whole party, a detached sense of what was going on. This is imperfectly translated as “people” in the translation given here. \n"
    },

    {"text": "Peut-on aimer plusieurs années de suite?\n- Oui, prétendaient les uns.\n- Non, affirmaient les autres.\nOn distinguait les cas, on établissait des démarcations, on citait des exemples; et tous, hommes et femmes, pleins de souvenirs surgissants et troublants, qu'ils ne pouvaient citer et qui leur montaient aux lèvres, semblaient émus, parlaient de cette chose banale et souveraine, l'accord tendre et mystérieux de deux êtres, avec une émotion profonde et un intérêt ardent.", 
     "translation":"Can one love for several consecutive years?\n“Yes”, claimed some.\n“No”, maintained others.\nPeople distinguished cases, established demarcations, cited examples: and everyone, men and women, full of looming and troubling memories, that they couldn’t cite and which came up to their lips, seemed to be moved, spoke of this banal and regal thing, the tender and mysterious agreement of two beings, with a profound emotion and an ardent interest.",
     "commentary": "Love is central to this story, and we see here how Maupassant suggests that love is something that is experienced by many and causes a lot of “looming and troubling memories”, but is still something “tender” and “profound”. This juxtaposition is really underlined with the phrase “cette chose banale et souveraine”, where “souveraine” here refers to something regal or majestic."},
    {"text": "Mais tout à coup quelqu'un, ayant les yeux fixés au loin, s'écria:\n- Oh! voyez, là-bas, qu'est-ce que c'est?\nSur la mer, au fond de l'horizon, surgissait une masse grise, énorme et confuse.\nLes femmes s'étaient levées et regardaient sans comprendre cette chose surpenante qu'elles n'avaient jamais vue.\nQuelqu'un dit:\n- C'est la Corse! On l'aperçoit ainsi deux ou trois fois par an dans certaines conditions d'atmosphère exceptionnelles, quand l'air, d'une limpidité parfaite, ne la cache plus par ces brumes de vapeur d'eau qui voilent toujours les lointains.", 
     "translation":"But suddenly someone, their eyes having been staring into the distance, cried out:\n“Oh! Look, over there, what is that?”\nOn the sea, at the end of the horizon, a grey mass suddenly emerged, enormous and blurry.\nThe women had gotten up and looked without understanding this surprising thing that they hadn’t ever seen.\nSomeone said:\n“It’s Corsica! You can notice it two or three times a year in certain exceptional atmospheric conditions, when the air, with a perfect clearness, hides it no longer by those hazes of water vapor that always enshroud faraway lands.",
     "commentary": "The word choice here makes Corsica sound scary and abrupt, as if it’s something that is forcing its way into the conversation to assert its existence.\nAlso, some people claim that you can see Corsica on clear days like the one described here from Nice or Monaco. Google it and see for yourself!"},
    {"text":"On distinguait vaguement les crêtes, on crut reconnaître la neige des sommets. Et tout le monde restait surpris, troublé, presque effrayé par cette brusque apparition d'un monde, par ce fantôme sorti de la mer. Peut-être eurent-ils des visions étranges, ceux qui partirent, comme Colomb, à travers les océans inexplorés.\nAlors, un vieux monsieur, qui n'avait pas encore parlé, prononça:\n- Tenez, j'ai connu dans cette île, qui se dresse devant nous, comme pour répondre elle-même à ce que nous disions et me rappeler un singulier souvenir, j'ai connu un exemple admirable d'un amour constant, d'un amour invraisemblablement heureux.\nLe voici.", 
     "translation":"They could make out vaguely the ridges, and thought they recognized the snow of the summits. And everyone stayed surprised, troubled, almost scared by the brusque appearance of a world, by this phantom come out of the water. Maybe they had strange visions, those that left, like Columbus, across the unexplored oceans. Then, an old gentleman, who had not yet spoken, said:\n“Look here, I’ve known on this island, which rises up before us, as if to herself respond to what we were saying and to remind me of a unique memory, I’ve known an admirable example of a constant love, of an unlikely, happy love.\nHere it is.",
     "commentary": "The “vieux monsieur” who gives us this story talks about Corsica as if it were a person, and even is cited by the narrator as having had visions of places faraway and unknown to the party folk gathered at the villa. \nHere begins the story-within-a-story part of this piece."}

    /*{"text":, 
     "translation":" ",
     "commentary": " "},*/
    ]
  }
}