export class VideoPlayer {
  private video = document.getElementById('video')! as HTMLVideoElement;
  private playButton = document.getElementById('play')! as HTMLButtonElement;
  private stopButton = document.getElementById('stop')! as HTMLButtonElement;
  private progress = document.getElementById('progress')! as HTMLInputElement;
  private timestamp = document.getElementById('timestamp')! as HTMLSpanElement;
  private videoPoster = this.video.poster;
  private videoDuration = this.video.duration;

  public constructor() {
    // 再生と停止
    this.video.addEventListener('click', this.playAndPauseVideo.bind(this));
    this.playButton.addEventListener('click', this.playAndPauseVideo.bind(this));
    this.stopButton.addEventListener('click', this.stopVideo.bind(this));
    // 時間のコントロール
    this.video.addEventListener('timeupdate', this.updateCurrentTime.bind(this));
    this.progress.addEventListener('change', this.changeProgress.bind(this))
  }

  // 再生 <-> 一時停止
  private playAndPauseVideo() {
    // posterを非表示にする
    if (this.video.poster) {
      this.video.poster = '';
      this.video.classList.remove('poster');
    }

    if (this.video.paused) {
      this.playButton.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
      this.video.play();
    } else {
      this.playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
      this.video.pause();
    }
  }

  // 停止
  private stopVideo() {
    this.video.pause();
    this.playButton.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    // ポスターを表示させる
    this.video.poster = this.videoPoster;
    this.video.classList.add('poster');
    this.video.load();
  }

  // 時間表示
  private updateCurrentTime() {
    // 動画の時間を秒数で取得
    const time = Math.floor(this.video.currentTime);
    // 時間を分と秒に分割
    const min = Math.floor(time / 60);
    const sec = time - (min * 60);
    // フォーマット(10未満の場合、頭に0を付ける)
    const mm = min < 10 ? '0' + min : min.toString();
    const ss = sec < 10 ? '0' + sec : sec.toString();
    this.timestamp.innerText =  `${mm}:${ss}`;

    // 時間をプログレスバーに反映
    this.progress.value = (this.video.currentTime / this.videoDuration * 100).toString();
  }

  // プログレスバーを操作した場合の処理
  private changeProgress() {
    // プログレスバーの位置を、動画全体の尺に対する秒数に変換
    const sec = this.videoDuration * parseInt(this.progress.value) / 100;
    this.video.currentTime = sec;
  }

}
