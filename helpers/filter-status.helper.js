module.exports = (query) => {
  const filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: ""
    },
    {
      name: "Đang hoạt động",
      status: "active",
      class: ""
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: ""
    }
  ]
  
  if(query.status){
    const index = filterStatus.findIndex(item => item.status == query.status)
    filterStatus[index].class = "active"
  }else{
    filterStatus[0].class = "active"
  }
  
    return filterStatus;
}