namespace talent_management.Data
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string Client { get; set; }
        public string Title { get; set; }
        public double Budget { get; set; }
        public DateTime StartDate { get; set; }
        public virtual ICollection<Talent> TalentList { get; set; }
    }
}