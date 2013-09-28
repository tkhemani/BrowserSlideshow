using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web.Http;
using RefreshLiveConfig.Models;

namespace RefreshLiveConfig.Controllers
{
    public class ValuesController : ApiController
    {
        //private readonly List<Items> itemsList = new List<Items>();
        private static readonly List<Items> itemsList = new List<Items>();

        private void Init()
        {
            //if (HttpContext.Current.Session["ConfigItemsList"])
            //{

            //}
            //HttpContext.Current.Session.Add("ConfigItemsList", itemsList);

            //itemsList.Add(new Items("http://jive.ms.com/groups/mobilehub-hybrid", "Mobile Hub Hybrid Goup in Jive",
            //                        20000, 100));
            //itemsList.Add(new Items("http://news.yahoo.com/", "Yahoo News", 15000, 100));
        }

        // GET api/values
        public List<Items> Get()
        {
            // Init();
            if (itemsList != null)
            {
                return itemsList;
            }
            else
            {
                return null;
            }
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        //// POST api/values
        //public void Post([FromBody] string value)
        //{
        //    string a = value;
        //}

        // POST api/values
        public void Post([FromBody] string value)
        {
            //itemsList.Add(value);

            var ser = new DataContractJsonSerializer(typeof (Items[]));

            string str = value;
            byte[] data = Encoding.ASCII.GetBytes(str);
            var stm = new MemoryStream(data, 0, data.Length);

            var ItemsArray = (Items[]) ser.ReadObject(stm);
            foreach (Items itm in ItemsArray)
            {
                itemsList.Add(itm);
            }

            // RFBCheckConf temp = ((Dictionary<string, RFBCheckConf>) HttpContext.Current.Session["ButtonInfoDictionary"])[CheckStatusID];

            // Items it = System.Web.Script.Serialization.JavaScriptSerializer().Deserialize<Items>(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            itemsList.Clear();
        }
    }
}
