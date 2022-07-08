namespace SBD.TestData;

public class TestFileGenerator
{
    private readonly string _testFile = "TestData/testFile.txt";
    private readonly string _namesFile = "TestData/names.txt";
    private readonly string _surnamesFile = "TestData/surnames.txt";

    private string GenerateRecordFromFiles()
    {
        var r = new Random();

        var names = File.ReadAllLines(_namesFile);
        var surnames = File.ReadAllLines(_surnamesFile);
        
        var randomName = r.Next(0, names.Length);
        var randomSurname = r.Next(0, surnames.Length);
        
        var person = $"{names[randomName]} {surnames[randomSurname]}\r\n";
            
        return person;
    }
    
    public string GenerateTestFile(int recordsCount)
    {
        
        if (File.Exists(_testFile)) File.Delete(_testFile);
        
        StreamWriter sw = File.AppendText(_testFile);
        while (recordsCount != 0)
        {
            sw.Write(GenerateRecordFromFiles());
            recordsCount--;
        }
        sw.Close();
        
        return _testFile;
    }
}