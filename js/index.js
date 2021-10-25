$(function () {
  $('.sample_btn').click(function () {
    $.ajax({
      url: 'index.html',
      type: 'GET',
      dataType: 'html'
    }).done(function (data) {
      /* 通信成功時 */
      $('.result').html(data); //取得したHTMLを.resultに反映
    }).fail(function (data) {
      /* 通信失敗時 */
      alert('通信失敗！');
    }).always(function (data) {
      /* 通信成功・失敗問わず */
    });
  });
});
