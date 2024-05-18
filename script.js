'use strict'

const playlist = {
	currenrSongIndex: 0,
	songs: [],
	addSong(name) {
		this.songs.push(name)
	},
	showPlaylist() {
		for (const song of this.songs) {
			console.log(song)
		}
	},
	playCurrentSong() {
		const currentSong = this.songs[this.currenrSongIndex]
		console.log(`odtwarzam: ${currentSong}`)
		this.currenrSongIndex++
		if (this.currenrSongIndex >= this.songs.length) {
			this.currenrSongIndex = 0
		}
	},
}

playlist.addSong('NF - HOPE')
playlist.addSong('Perfect - Autobiografia')
playlist.addSong('Imagine Dragons - Wrecked')

playlist.showPlaylist()
playlist.playCurrentSong()
