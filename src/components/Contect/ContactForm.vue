<template>
  <div class="row mt-5">
    <div class="col-md-5">
    </div>
    <div class="col-md-7">
      <div class="card">
        <div class="card-body p-4">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Message</label>
              <textarea name="" id="" class="form-control" rows="5"></textarea>
            </div>
            <button type="submit" class="btn mt-3">Send
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #121B23;
  border: 1px solid #309EC7;
}
label {
  color: #E5E9F0;
}
.form-control {
  background-color: #0A0F14;
  border: 1px solid #309EC7;
  color: #E5E9F0;
}
.btn {
  background-color: #121B23;
  border: 1px solid #309EC7;
  color: #E5E9F0;
}
.btn:hover {
  background-color: #309EC7;
  border: 1px solid #309EC7;
  color: #121B23;
}
</style>
