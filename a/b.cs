using System.Runtime.Serialization;

namespace RefreshLiveConfig.Models
{
    [DataContract]
    public class Items
    {
        public Items(string url, string title, int time, float zoom)
        {
            Url = url;
            Time = time;
            Zoom = zoom;
            Title = title;
        }

        [DataMember]
        public string Url { get; set; }

        [DataMember]
        public int Time { get; set; }

        [DataMember]
        public float Zoom { get; set; }

        [DataMember]
        public string Title { get; set; }
    }
}
