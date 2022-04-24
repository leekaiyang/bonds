function buildForm() {
    console.log("building modal...")
    $('#ModalBody').empty() //clear the html first
    newBody =
        `<form id="form">
        <div class="mb-3">
            <label for="location" class="col-form-label">Your Unit Number:</label>
            <input type="text" class="form-control" id="location" pattern="[A-Z]{1}-[0-9]{2}-[0-9a-zA-Z]{2}" placeholder="X-XX-XX" required>
        </div>
        <div class="mb-3">
            <label for="name" class="col-form-label">Details:</label>
            <select class="select" id="details" reuqired>
                <option value="Pipe repairment">Pipe repairment</option>
                <option value="Wiring repairment">Wiring repairment</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Others">Others</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="description" class="col-form-label">Description: </label>
            <textarea class="form-control" id="description" rows="3" cols="30"></textarea>
        </div>
        <input type="submit"  class="me-lg-3 btn btn-primary" id="submit">
    </form> `
    $('#ModalBody').append(newBody)
}

function submit() {
    console.log("SUBMIT called")

    //building and showing modal
    buildForm();
    $('#Modal').on('show.bs.modal', function () {
        $('#AddModalLabel').text('Report Problem: ');
    });

    $('#Modal').modal('show');

    $("#form").submit(function (e) {
        alert("reported.")
        $("#form").trigger("reset");
        e.preventDefault();
    })
}


