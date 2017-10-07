export default (Collection, element) => {
  return (event) => {
    const target = $(event.currentTarget);
    const icon = target.find('i');
    const dialog = target.parents('.modal');

    icon.addClass('fa-refresh fa-spin').removeClass('fa-trash');
    dialog.find('input').attr('disabled', 'disabled');
    $('button.close', dialog).hide();

    const id = $(`#${element}_id`).val();

    const instance = Collection.get(id);

    instance.destroy({
      wait: true,
      success: () => {
        dialog.modal('hide');
        $('.callout-danger', dialog).hide();

        icon.removeClass('fa-refresh fa-spin').addClass('fa-trash');
        $('button.close', dialog).show();
        dialog.find('input').removeAttr('disabled');
      },
      error: () => {
        icon.removeClass('fa-refresh fa-spin').addClass('fa-trash');
        $('button.close', dialog).show();
        dialog.find('input').removeAttr('disabled');
      }
    });
  };
};
