using System;

namespace csd.data {
public class User

    {
        public int Id { get; set; }
        public string deployed_url { get; set; }
        public DateTime paid_till { get; set; }
        public string username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string user_role { get; set; }
        public string active { get; set; }
        public string contributor_id { get; set; }
        public string center_id { get; set; }
    }
}