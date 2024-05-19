'use strict'

// const playlist = {
// 	currenrSongIndex: 0,
// 	songs: [],
// 	addSong(name) {
// 		this.songs.push(name)
// 	},
// 	showPlaylist() {
// 		for (const song of this.songs) {
// 			console.log(song)
// 		}
// 	},
// 	playCurrentSong() {
// 		const currentSong = this.songs[this.currenrSongIndex]
// 		console.log(`odtwarzam: ${currentSong}`)
// 		this.currenrSongIndex++
// 		if (this.currenrSongIndex >= this.songs.length) {
// 			this.currenrSongIndex = 0
// 		}
// 		setTimeout(() => {
// 			this.playCurrentSong()
// 		}, 10000)
// 	},
// }

// playlist.addSong('NF - HOPE')
// playlist.addSong('Perfect - Autobiografia')
// playlist.addSong('Imagine Dragons - Wrecked')

// playlist.showPlaylist()
// playlist.playCurrentSong()

const playList = {
	currentIndex: 0,
	songs: [],
	addSong(name) {
		this.songs.push(name)
	},
	showList() {
		this.songs.forEach(song => {
			console.log(song)
		})
	},
	playSongs() {
		const currentSong = this.songs[this.currentIndex]
		console.log(`Teraz leci: ${currentSong}`)
		this.currentIndex++
		if (this.currentIndex >= this.songs.length) {
			this.currentIndex = 0
		}
		setTimeout(() => {
			this.playSongs()
		}, 5000)
	},
}

playList.addSong("Beyoncé - TEXAS HOLD'EM")
playList.addSong('Sanah - Hip Hip Hurra')
playList.addSong('Rihanna - Stay')
playList.addSong("Fergie - Big Girls Don't Cry")
playList.showList()
playList.playSongs()
