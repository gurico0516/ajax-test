<script>
  $(function(){
    $.ajax({
      url: 'ここに取得したいURLまたはディレクトリを入力'
    }).done(function (data) {
      /* 通信成功時 */

    }).fail(function (data) {
      /* 通信失敗時 */

    }).always(function (data) {
      /* 通信成功・失敗問わず */

    });
});
</script>
